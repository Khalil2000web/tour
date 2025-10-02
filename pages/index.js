import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>My Travel Tours 🌍</h1>
      <p>Click on a trip to see my photos and videos!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link href="/rome">
            <a style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Rome 🇮🇹</a>
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link href="/paris">
            <a style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Paris 🇫🇷</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
