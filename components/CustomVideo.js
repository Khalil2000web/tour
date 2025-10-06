import { useRef, useState, useEffect } from "react";

export default function CustomVideo({ src, muteIcon, unmuteIcon }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currentlyUnmutedVideo = useRef(null);

  // Toggle play
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

  // Toggle mute (only one unmuted video at a time)
  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      if (currentlyUnmutedVideo.current && currentlyUnmutedVideo.current !== videoRef.current) {
        currentlyUnmutedVideo.current.muted = true;
      }
      videoRef.current.muted = false;
      currentlyUnmutedVideo.current = videoRef.current;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      currentlyUnmutedVideo.current = null;
      setIsMuted(true);
    }
  };

  // Retry video load
  const retryLoad = () => {
    setError(false);
    setLoading(true);
    videoRef.current.load();
    videoRef.current.play().catch(() => setIsPlaying(false));
  };

  // IntersectionObserver to auto-mute when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !videoRef.current.muted) {
          videoRef.current.muted = true;
          setIsMuted(true);
          currentlyUnmutedVideo.current = null;
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-container" style={{ position: "relative" }}>
      {/* Spinner */}
      {loading && !error && <div className="spinner"></div>}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onPlaying={() => {
          setLoading(false);
          setError(false);
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setLoading(true)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        style={{ width: "100%", display: error ? "none" : "block" }}
      />

      {/* Error message */}
      {error && (
        <div className="error-overlay">
          <p>Video failed to load.</p>
          <button onClick={retryLoad}>Retry</button>
        </div>
      )}

      {/* Mute/Unmute button */}
      {!error && (
        <button className="sound-btn" onClick={toggleMute}>
          <img src={isMuted ? muteIcon : unmuteIcon} alt="sound" />
        </button>
      )}

      {/* Play button overlay */}
      {!isPlaying && !error && (
        <button className="play-btn" onClick={togglePlay}>
          Play
        </button>
      )}

      <style jsx>{`
        .sound-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
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
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
