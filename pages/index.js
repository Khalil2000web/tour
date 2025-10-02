import Link from 'next/link';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <main>
      <h1 className={styles.titleH1}>Tour Archive</h1>

      <section className={styles.main20}>
        <h2>2025</h2>
        <div className={styles.cards}>
          <a href="/2025/prague" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2493.jpeg" loading="eager" className={styles.cardImg} alt="Prague, Czechia" />
            <div className={styles.name}>PRAGUE</div>
          </a>
          <a href="/2025/vienna" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_1804.jpeg" loading="eager" className={styles.cardImg} alt="Vienna, Austria" />
            <div className={styles.name}>VIENNA</div>
          </a>
          <a href="/2025/budapest" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2313.jpeg" loading="eager" className={styles.cardImg} alt="Budapest, Hungary" />
            <div className={styles.name}>BUDAPEST</div>
          </a>
        </div>
      </section>

      <section className={styles.main20}>
        <h2>2024</h2>
        <div className={styles.cards}>
          <a href="/2024/france" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0874.gif" loading="eager" className={styles.cardImg} alt="FRANCE" />
            <div className={styles.name}>FRANCE</div>
          </a>
          <a href="/2024/germany" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_9199.jpeg" loading="eager" className={styles.cardImg} alt="GERMANY" />
            <div className={styles.name}>GERMANY</div>
          </a>
          <a href="/2024/switzerland" className={styles.card}>
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_0877.gif" loading="eager" className={styles.cardImg} alt="SWITZERLAND" />
            <div className={styles.name}>SWITZERLAND</div>
          </a>
        </div>
      </section>

      <section className={styles.main20}>
        <h2>2015</h2>
        <div className={styles.cards}>
          <a href="/2015/italy" className={styles.card}>
            <img src="https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6300.jpeg" loading="eager" className={styles.cardImg} alt="ITALY" />
            <div className={styles.name}>ITALY</div>
          </a>
        </div>
      </section>

      <section className={styles.main20}>
        <h2>2014</h2>
        <div className={styles.cards}>
          <a href="/2014/turkiye" className={styles.card}>
            <img src="https://pub-1d34e12f60c64f108921e1253a049c38.r2.dev/IMG_5703.jpeg" loading="eager" className={styles.cardImg} alt="TÜRKİYE" />
            <div className={styles.name}>TÜRKİYE</div>
          </a>
        </div>
      </section>

      <section className={styles.main20}>
        <h2>2013</h2>
        <div className={styles.cards}>
          <a href="/2013/antalya" className={styles.card}>
            <img src="https://pub-8e3e2b2b582842958a59dba84262a718.r2.dev/IMG_5693.jpeg" loading="eager" className={styles.cardImg} alt="ANTALYA" />
            <div className={styles.name}>ANTALYA</div>
          </a>
        </div>
      </section>
</main>
  );
}
