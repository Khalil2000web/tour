export default function Test() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>My Custom Video Player</h1>
      <CustomVideo
        src="https://ik.imagekit.io/ntsnw5fxa/MVI_2540.mp"
        muteIcon="/icons/mute.svg"
        unmuteIcon="/icons/unmute.svg"
      />
    </div>
  );
}
