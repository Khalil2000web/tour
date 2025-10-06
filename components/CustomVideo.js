import { useRef, useState, useEffect } from "react";

// Global to manage one unmuted video at a time
let currentlyUnmutedVideo = null;

export default function CustomVideo({ src, muteIcon, unmuteIcon }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Update icon instantly and sync state
  const updateIcon = (muted) => {
    const icon = containerRef.current?.querySelector(".sound-btn img");
    if (icon) icon.src = muted ? muteIcon : unmuteIcon;
    setIsMuted(muted);
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      // Mute previous unmuted video immediately
      if (currentlyUnmutedVideo && currentlyUnmutedVideo !== videoRef.current) {
        currentlyUnmutedVideo.muted = true;
        const prevIcon = currentlyUnmutedVideo.closest(".video-container")?.querySelector(".sound-btn img");
        if (prevIcon) prevIcon.src = muteIcon;
      }

      videoRef.current.muted = false;
      currentlyUnmutedVideo = videoRef.current;
      updateIcon(false);
    } else {
      videoRef.current.muted = true;
      if (currentlyUnmutedVideo === videoRef.current) currentlyUnmutedVideo = null;
      updateIcon(true);
    }
  };

  // Retry video load
  const retryLoad = () => {
    setError(false);
    setLoading(true);
    videoRef.current.load();
    videoRef.current.play().catch(() => setIsPlaying(false));
  };

  // IntersectionObserver: mute only when fully out of frame
  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      if (!videoRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const fullyOut = rect.bottom < 0 || rect.top > window.innerHeight;
      if (fullyOut && !videoRef.current.muted) {
        videoRef.current.muted = true;
        updateIcon(true);
        if (currentlyUnmutedVideo === videoRef.current) currentlyUnmutedVideo = null;
      }
    }, { threshold: 0 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Keep state synced with actual video properties
  useEffect(() => {
    const frame = requestAnimationFrame(function sync() {
      if (videoRef.current) {
        setIsPlaying(!videoRef.current.paused);
        setIsMuted(videoRef.current.muted);
      }
      requestAnimationFrame(sync);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Video event handlers
  const handlePlay = () => {
    setLoading(false);
    setIsPlaying(true);
  };
  const handlePause = () => setIsPlaying(false);
  const handleWaiting = () => setLoading(true);
  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div ref={containerRef} className="video-container">
      {loading && !error && <div className="spinner"></div>}

      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onPlaying={handlePlay}
        onPause={handlePause}
        onWaiting={handleWaiting}
        onError={handleError}
        style={{
          width: "100%",
          height: "100%",
          display: error ? "none" : "block",
          objectFit: "cover"
        }}
      />

      {error && (
        <div className="error-overlay">
          <p>Video failed to load. Try again.</p>
          <button onClick={retryLoad}>Retry</button>
        </div>
      )}

      {!error && (
        <button className="sound-btn" onClick={toggleMute}>
          <img src={isMuted ? muteIcon : unmuteIcon} alt="sound" />
        </button>
      )}

      {!isPlaying && !error && (
        <button className="play-btn" onClick={togglePlay}>
          ▶
        </button>
      )}

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          min-height: 250px;
          background: black;
        }

        .sound-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10;
        }
        .sound-btn img {
          width: 20px;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 40px;
          z-index: 10;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }

        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: 10px solid #4682B4;
          border-top-color: white;
          opacity: 0.8;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-overlay {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          color: white;
          z-index: 20;
        }
        .error-overlay button {
          margin-top: 10px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}