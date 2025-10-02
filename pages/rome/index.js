export default function Rome() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Rome Trip 🇮🇹</h1>
      <p>My favorite photos and videos from Rome!</p>
      <img src="/rome/photo1.jpg" alt="Rome Photo" style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }} />
      <video src="/rome/video1.mp4" controls style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }} />
    </div>
  );
}
