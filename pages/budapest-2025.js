import TravelsLayout from '../components/TravelsLayout.js';
import Head from 'next/head';
import CustomVideo from '../components/CustomVideo';

export default function Turkiye2014Page({ media }) {
return (
<TravelsLayout>
<Head>
<title>BUDAPEST 2025</title>
<meta charSet="UTF-8" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Khaliil's Official Website" />
<meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
<meta name="author" content="Khaliil" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://khaliil.com/" />

<meta property="og:title" content="Khaliil" />
<meta property="og:description" content="Khaliil in Budapest 2025" />
<meta property="og:image" content="" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Khaliil" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://khaliil.com/" />
<meta property="og:locale" content="en_US" />
<meta property="og:updated_time" content="2025-10-09T00:00:00+03:00" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Khaliil" />
<meta name="twitter:description" content="Khaliil in Budapest 2025" />
<meta name="twitter:image" content="" />
<meta name="twitter:site" content="@khaliildiab" />
<meta name="twitter:creator" content="@khaliildiab" />

<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#000000" />

<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="Khaliil" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

<meta name="copyright" content="2025" />
<meta name="referrer" content="no-referrer-when-downgrade" />
</Head>

      <div className="travel-title-overlay">
        <h1>BUDAPEST 2025</h1>
      </div>

      <div className="galmain3">
        {media.map((item, index) => (
          <div key={index} className="image-wrapper">
            {item.type === 'image' ? (
              <img
                src={item.src}
                className="image"
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <CustomVideo
                src={item.src}
                muteIcon={item.muteIcon || '/icons/icon-mute.svg'}
                unmuteIcon={item.unmuteIcon || '/icons/icon-volume.svg'}
              />
            )}
          </div>
        ))}
      </div>
    </TravelsLayout>
  );
}

export async function getStaticProps() {
  const media = [
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2368.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_4324.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_4326.jpeg' },
    { type: 'video', src: 'https://ik.imagekit.io/ntsnw5fxa/MVI_2372.mp4', muteIcon: '/icons/icon-mute.svg', unmuteIcon: '/icons/icon-volume.svg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_4338.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_4339.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2139.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2140.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2150.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2155.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2164.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2168.jpeg' },
    { type: 'video', src: 'https://ik.imagekit.io/ntsnw5fxa/MVI_2077.mp4', muteIcon: '/icons/icon-mute.svg', unmuteIcon: '/icons/icon-volume.svg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2169.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2179.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2199.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2200.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2227.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2251.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2261.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2262.jpeg' },
    { type: 'video', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/MVI_2079 2.mp4', muteIcon: '/icons/icon-mute.svg', unmuteIcon: '/icons/icon-volume.svg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2263.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2274.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2287.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2293.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2297.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2298.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2299.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2313.jpeg' },
    { type: 'video', src: 'https://ik.imagekit.io/ntsnw5fxa/MVI_2080.mp4', muteIcon: '/icons/icon-mute.svg', unmuteIcon: '/icons/icon-volume.svg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2314.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2350.jpeg' },
    { type: 'image', src: 'https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2353.jpeg' }
  ];

  return { props: { media } };
}