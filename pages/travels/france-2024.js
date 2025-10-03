

export default function ParisPage() {
  return (
    <TravelsLayout>
      <div className="galmain3">

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6325.heic" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6397.heic" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6415.heic" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/titl5eb.jpeg" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6436.heic" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6439.heic" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

        <div className="video-container">
          <canvas></canvas>
          <video src="https://pub-dbfaea2b62d040e1a68ee4949870f6dd.r2.dev/IMG_6110.mov" muted loop autoPlay playsInline preload="auto" style={{ display: "none" }}></video>
          <div className="spinner"></div>
          <div className="sound-btn">
            <img src="https://tour.khaliil.com/static/images/icon-mute.svg" alt="Toggle Sound" />
          </div>
          <div className="error-message"></div>
          <div className="play-btn"></div>
        </div>

        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/GMP_U2F2ZUdIMDE%3D.GIF" className="image" alt="Image" loading="lazy" decoding="async" />
        </div>

      </div>
    </TravelsLayout>
  );
}