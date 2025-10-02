import Link from 'next/link';
import '../styles/index.css'

export default function Home() {
  return (
    <main>
      <h1 className="title-h1">Tour Archive</h1>

      <section className="main20">
        <h2>2025</h2>
        <div className="cards">
          <a href="/2025/prague" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2493.jpeg" loading="eager" className="card-img" alt="Prague, Czechia" />
            <div className="name">PRAGUE</div>
          </a>
          <a href="/2025/vienna" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_1804.jpeg" loading="eager" className="card-img" alt="Vienna, Austria" />
            <div className="name">VIENNA</div>
          </a>
          <a href="/2025/budapest" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2313.jpeg" loading="eager" className="card-img" alt="Budapest, Hungary" />
            <div className="name">BUDAPEST</div>
          </a>
        </div>
      </section>

      <section className="main20">
        <h2>2024</h2>
        <div className="cards">
          <a href="/2024/france" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0874.gif" loading="eager" className="card-img" alt="FRANCE" />
            <div className="name">FRANCE</div>
          </a>
          <a href="/2024/germany" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_9199.jpeg" loading="eager" className="card-img" alt="GERMANY" />
            <div className="name">GERMANY</div>
          </a>
          <a href="/2024/switzerland" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0877.gif" loading="eager" className="card-img" alt="SWITZERLAND" />
            <div className="name">SWITZERLAND</div>
          </a>
        </div>
      </section>

      <section className="main20">
        <h2>2015</h2>
        <div className="cards">
          <a href="/2015/italy" className="card">
            <img src="https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6300.jpeg" loading="eager" className="card-img" alt="ITALY" />
            <div className="name">ITALY</div>
          </a>
        </div>
      </section>

      <section className="main20">
        <h2>2014</h2>
        <div className="cards">
          <a href="/2014/turkiye" className="card">
            <img src="https://pub-1d34e12f60c64f108921e1253a049c38.r2.dev/IMG_5703.jpeg" loading="eager" className="card-img" alt="TÜRKİYE" />
            <div className="name">TÜRKİYE</div>
          </a>
        </div>
      </section>

      <section className="main20">
        <h2>2013</h2>
        <div className="cards">
          <a href="/2013/antalya" className="card">
            <img src="https://pub-8e3e2b2b582842958a59dba84262a718.r2.dev/IMG_5693.jpeg" loading="eager" className="card-img" alt="ANTALYA" />
            <div className="name">ANTALYA</div>
          </a>
        </div>
      </section>
    </main>
  )
}
