import '../styles/globals.css'
import MenuOverlay from '../components/MenuOverlay';

export default function App({ Component, pageProps }) {
  return (
<>

<MenuOverlay />
<Component {...pageProps} />

</>
);
}
