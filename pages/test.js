import CustomVideo from "../components/CustomVideo.js";

export default function Test() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>My Custom Video Player</h1>
      <CustomVideo
        src="/videos/IMG_7387.mp4"
        muteIcon="/images/volume-on.png"
        unmuteIcon="/images/volume-off.png"
      />
    </div>
  );
}
