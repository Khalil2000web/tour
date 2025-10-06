import { useRef, useState, useEffect } from "react";

let currentlyUnmutedVideo = null; // global to manage multiple videos

export default function CustomVideo({ src, muteIcon, unmuteIcon }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Play / pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Mute / unmute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      // mute previous unmuted video immediately
      if (currentlyUnmutedVideo && currentlyUnmutedVideo !== videoRef.current) {
        currentlyUnmutedVideo.muted = true;
      }
      videoRef.current.muted = false;
      currentlyUnmutedVideo = videoRef.current;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      currentlyUnmutedVideo = null;
      setIsMuted(true);
    }
  };

  // Retry loading on error
  const retryLoad = () => {
    setError(false);
    setLoading(true);
    videoRef.current.load();
    videoRef.current.play().catch(() => setIsPlaying(false));
  };

  // Handle IntersectionObserver to mute video fully out of frame
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (videoRef.current && !videoRef.current.muted) {
            videoRef.current.muted = true;
            setIsMuted(true);
            if (currentlyUnmutedVideo === videoRef.current) currentlyUnmutedVideo = null;
          }
        }
      },
      { threshold: 1 } // fully out of view
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Video event handlers to sync state
  const handlePlay = () => {
    setIsPlaying(true);
    setLoading(false);
  };
  const handlePause = () => setIsPlaying(false);
  const handleWaiting = () => setLoading(true);
  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div ref={containerRef} className="video-container" style={{ position: "relative" }}>
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
        style={{ width: "100%", display: error ? "none" : "block" }}
      />

      {error && (
        <div className="error-overlay">
          <p>Video failed to load.</p>
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
          Play
        </button>
      )}

      <style jsx>{`
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
          height: auto;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 30px;
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
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