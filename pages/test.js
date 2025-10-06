import CustomVideo from "../components/CustomVideo.js";

export default function Test() {
  return (
    <div style={{ padding-top: "90px" }}>
      <CustomVideo
        src="/videos/IMG_7387.mp4"
        muteIcon="/icons/icon-mute.svg"
        unmuteIcon="/icons/icon-volume.svg"
      />
    </div>
  );
}
