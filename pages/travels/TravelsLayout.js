import { useEffect } from "react";

export default function TravelsLayout({ children }) {
  useEffect(() => {
    // ===== Script 1: image overlay =====
    const wrappers = document.querySelectorAll(".image-wrapper");
    let scrollPosition = 0;

    function muteAllVideos() {
      const videos = document.querySelectorAll(".video-container video");
      videos.forEach(video => {
        if (!video.muted) {
          video.muted = true;
          const icon = video.closest(".video-container")?.querySelector(".sound-btn img");
          if (icon) icon.src = "https://khaliil.com/static/images/icon-mute.svg";
        }
      });
    }

    function lockBodyScroll() {
      scrollPosition = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.overflow = "hidden";
    }

    function unlockBodyScroll() {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition);
    }

    wrappers.forEach(wrapper => {
      wrapper.addEventListener("click", () => {
        const img = wrapper.querySelector("img.image");
        if (!img) return;

        muteAllVideos();
        lockBodyScroll();

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        overlay.appendChild(bigImg);

const closeBtn = document.createElement("button");
closeBtn.classList.add("close-btn"); // <-- this connects it to your CSS
closeBtn.innerText = "Close";
closeBtn.addEventListener("click", () => {
  document.body.removeChild(overlay);
  unlockBodyScroll();
});

        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
      });
    });

    // ===== Script 2: video handling =====
    const containers = document.querySelectorAll(".video-container");
    let currentlyUnmutedVideo = null;

    containers.forEach(container => {
      const video = container.querySelector("video");
      const canvas = container.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      const soundBtn = container.querySelector(".sound-btn");
      const soundIcon = soundBtn.querySelector("img");
      const playBtn = container.querySelector(".play-btn");
      const spinner = container.querySelector(".spinner");

      let isVideoRendering = false;

      function renderFrame() {
        if (!isVideoRendering) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (video.readyState >= 2) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
        requestAnimationFrame(renderFrame);
      }

      video.addEventListener("canplay", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (!isVideoRendering) {
          isVideoRendering = true;
          renderFrame();
        }
        spinner.style.display = "none";
      });

      soundBtn.addEventListener("click", () => {
        if (video.muted) {
          if (currentlyUnmutedVideo && currentlyUnmutedVideo !== video) {
            currentlyUnmutedVideo.muted = true;
          }
          video.muted = false;
          currentlyUnmutedVideo = video;
          soundIcon.src = "https://khaliil.com/static/images/icon-volume.svg";
        } else {
          video.muted = true;
          currentlyUnmutedVideo = null;
          soundIcon.src = "https://khaliil.com/static/images/icon-mute.svg";
        }
      });

      video.play().catch(() => playBtn.style.display = "block");
    });

    // Cleanup when navigating away
    return () => {
      wrappers.forEach(wrapper => wrapper.replaceWith(wrapper.cloneNode(true)));
      containers.forEach(container => container.replaceWith(container.cloneNode(true)));
    };
  }, []);

  return <>{children}</>;
}
