import { useEffect } from "react";

export default function TravelsLayout({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const wrappers = document.querySelectorAll(".image-wrapper");
    let scrollPosition = 0;

    function muteAllVideos() {
      const videos = document.querySelectorAll(".video-container video");
      videos.forEach(video => {
        if (!video.muted) {
          video.muted = true;
          const icon = video.closest(".video-container")?.querySelector(".sound-btn img");
          if (icon) icon.src = "https://tour.khaliil.com/static/images/icon-mute.svg";
          if (window.currentlyUnmutedVideo === video) window.currentlyUnmutedVideo = null;
        }
      });
    }

    function lockBodyScroll() {
      scrollPosition = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    }

    function unlockBodyScroll() {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition);
    }

    wrappers.forEach(wrapper => {
      wrapper.addEventListener("click", () => {
        const img = wrapper.querySelector("img.image");
        if (!img) return;

        // Mute any currently unmuted video
        muteAllVideos();

        lockBodyScroll();

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", img.alt || "Image preview");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.alt = img.alt || "Image";

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerText = "Close";
        closeBtn.setAttribute("aria-label", "Close overlay");

        function closeOverlay() {
          document.body.removeChild(overlay);
          unlockBodyScroll();
          wrapper.focus();
        }

        closeBtn.addEventListener("click", closeOverlay);

        overlay.addEventListener("keydown", (e) => {
          if (e.key === "Escape") closeOverlay();
          if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
        });

        overlay.appendChild(bigImg);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);

        closeBtn.focus();
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      wrappers.forEach(wrapper => {
        const clone = wrapper.cloneNode(true);
        wrapper.parentNode.replaceChild(clone, wrapper);
      });
    };
  }, []);

  return <>{children}</>;
}