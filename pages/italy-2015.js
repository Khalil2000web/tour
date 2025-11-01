import TravelsLayout from '../components/TravelsLayout.js';
import Head from 'next/head';
import CustomVideo from '../components/CustomVideo';

export default function Italy2015Page({ media }) {
  return (
    <TravelsLayout>
<Head>
<title>KHALIIL</title>
<meta charSet="UTF-8" />
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Khaliil's Official Website" />
<meta name="keywords" content="Khaliil, Official Website, Portfolio, Developer, Designer" />
<meta name="author" content="Khaliil" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://khaliil.com/" />

<meta property="og:title" content="Khaliil" />
<meta property="og:description" content="Khaliil in Italy 2015" />
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
<meta name="twitter:description" content="Khaliil in Italy 2015" />
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
        <h1>ITALY 2015</h1>
      </div>

      <div className="galmain3">
        {media.map((item, index) => (
          <div key={index} className="image-wrapper">
            {item.type === 'image' ? (
              <img
                src={item.src}
                className="image"
                alt={item.alt || 'Image in Italy'}
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
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6296.jpeg', alt: 'Image I took in Italy' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6297.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6298.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6299.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6300.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6301.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6302.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6303.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6304.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6305.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6306.jpeg' },
    { type: 'image', src: 'https://pub-7771b4a33590457daa4b7ada75458878.r2.dev/IMG_6307.jpeg' },
    // { type: 'video', src: 'https://ik.imagekit.io/cx6yav04a/91AAD0-2855-41E9-AFBC-BF7F0B030D1B-2.mp4', muteIcon: '/icons/icon-mute.svg', unmuteIcon: '/icons/icon-volume.svg', videoLink: 'https://tour.khaliil.com/' }
  ];

  return { props: { media } };
}
