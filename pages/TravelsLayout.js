useEffect(() => {
  if (typeof window === "undefined") return; // Ensure this only runs in the browser

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

  function lockBodyScroll() { /* ... same as before */ }
  function unlockBodyScroll() { /* ... same as before */ }

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      const img = wrapper.querySelector("img.image");
      if (!img) return;

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
      closeBtn.setAttribute("aria-label", "Close image overlay");

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

}, []); // <--- useEffect ensures this runs only on client