// 1️⃣ Import your component
import CustomVideo from "../components/CustomVideo.js"; // adjust path if needed

export default function Test() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>My Custom Video Player</h1>
      <CustomVideo
        src="http://www.example.com/waterfall-video.mp4" // make sure .mp4
        muteIcon="/icons/mute.svg"
        unmuteIcon="/icons/unmute.svg"
      />
    </div>
  );
}
