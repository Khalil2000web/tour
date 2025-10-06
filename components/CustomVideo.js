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
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .sound-btn img {
        width:20px;height:auto;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;font-size:30px;z-index:10;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;margin:-30px 0 0 -30px;
          transform: translate(-50%, -50%);
          z-index:5;user-select:none;-webkit-user-select:none;width:55px;height:55px;border-radius:50%;border:10px solid #4682B4;opacity:0.8;animation:spinner-bulqg1 0.8s infinite linear alternate,spinner-oaa3wk 1.6s infinite linear;margin:-30px 0 0 -30px;
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
        @keyframes spinner-bulqg1{0%{clip-path:polygon(50% 50%,0 0,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%);}12.5%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%);}25%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,100% 100%,100% 100%);}50%{clip-path:polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,50% 100%,0% 100%);}62.5%{clip-path:polygon(50% 50%,100% 0,100% 0%,100% 0%,100% 100%,50% 100%,0% 100%);}75%{clip-path:polygon(50% 50%,100% 100%,100% 100%,100% 100%,100% 100%,50% 100%,0% 100%);}100%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%);}}@keyframes spinner-oaa3wk{0%{transform:scaleY(1) rotate(0deg);}49.99%{transform:scaleY(1) rotate(135deg);}50%{transform:scaleY(-1) rotate(0deg);}100%{transform:scaleY(-1) rotate(-135deg);}}

      `}</style>
    </div>
  );
}
