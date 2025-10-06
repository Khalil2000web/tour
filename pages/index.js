import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
  <>
      <Head>
        <title>TOUR</title>
        <meta name="description" content="Khaliil's Official Website" />
        <meta name="url" content="https://www.khaliil.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Khaliil" />
        <meta name="twitter:description" content="Khaliil's Official Website" />
        <meta name="twitter:image" content="/static/images/19311D40-948D-475E-A39B-9FB6AC451657.jpeg" />
        <meta property="og:title" content="Khaliil" />
        <meta property="og:description" content="Khaliil's Official Website" />
        <meta property="og:image" content="/static/images/19311D40-948D-475E-A39B-9FB6AC451657.jpeg" />
        <meta property="og:site_name" content="Khaliil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.khaliil.com/" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <meta name="copyright" content="2025" />
      </Head>
    <main className="indexmain">
      <h1 className="title-h1">Tour Archive</h1>

      {/* 2025 */}
      <section className="main20">
        <h2>2025</h2>
        <div className="cards">
          <Link href="/prague-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2493.jpeg" loading="eager" className="card-img" alt="Prague, Czechia" />
            <div className="name">PRAGUE</div>
          </Link>
          <Link href="/vienna-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_1804.jpeg" loading="eager" className="card-img" alt="Vienna, Austria" />
            <div className="name">VIENNA</div>
          </Link>
          <Link href="/budapest-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2313.jpeg" loading="eager" className="card-img" alt="Budapest, Hungary" />
            <div className="name">BUDAPEST</div>
          </Link>
        </div>
      </section>

      {/* 2024 */}
      <section className="main20">
        <h2>2024</h2>
        <div className="cards">
          <Link href="/france-2024" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0874.gif" loading="eager" className="card-img" alt="FRANCE" />
            <div className="name">FRANCE</div>
          </Link>
          <Link href="/germany-2024" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_9199.jpeg" loading="eager" className="card-img" alt="GERMANY" />
            <div className="name">GERMANY</div>
          </Link>
          <Link href="/switzerland-2024" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0877.gif" loading="eager" className="card-img" alt="SWITZERLAND" />
            <div className="name">SWITZERLAND</div>
          </Link>
        </div>
      </section>

      {/* 2015 */}
      <section className="main20">
        <h2>2015</h2>
        <div className="cards">
          <Link href="/italy-2015" className="card">
            <img src="https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6300.jpeg" loading="eager" className="card-img" alt="ITALY" />
            <div className="name">ITALY</div>
          </Link>
        </div>
      </section>

      {/* 2014 */}
      <section className="main20">
        <h2>2014</h2>
        <div className="cards">
          <Link href="/turkiye-2014" className="card">
            <img src="https://pub-1d34e12f60c64f108921e1253a049c38.r2.dev/IMG_5703.jpeg" loading="eager" className="card-img" alt="TÜRKİYE" />
            <div className="name">TÜRKİYE</div>
          </Link>
        </div>
      </section>

      {/* 2013 */}
      <section className="main20">
        <h2>2013</h2>
        <div className="cards">
          <Link href="/antalya-2013" className="card">
            <img src="https://pub-8e3e2b2b582842958a59dba84262a718.r2.dev/IMG_5693.jpeg" loading="eager" className="card-img" alt="ANTALYA" />
            <div className="name">ANTALYA</div>
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
