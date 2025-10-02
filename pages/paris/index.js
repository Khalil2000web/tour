export default function Paris() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Paris Trip 🇫🇷</h1>
      <p>My favorite photos and videos from Paris!</p>
      <img src="/paris/photo1.jpg" alt="Paris Photo" style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }} />
      <video src="/paris/video1.mp4" controls style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }} />
    </div>
  );
}
