import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  // Determine active page for button display
  const getActivePage = () => {
    const path = router.pathname;

    // Tour subpages (anything except the index /)
    if (path !== '/' && path !== '') {
      const parts = path.split('/');
      return parts[1] ? parts[1].toUpperCase() : '';
    }

    return 'TRIPS';
  };

  const [activePage, setActivePage] = useState(getActivePage());

  useEffect(() => {
    setActivePage(getActivePage());
  }, [router.pathname]);

  const handleToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="menu-toggle"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        aria-label={menuOpen ? 'Close pages menu' : 'Open pages menu'}
      >
        PAGES{activePage ? ` / ${activePage}` : ' /'}
      </button>

      <div
        className={`menu-cover ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        id="main-menu"
        ref={menuRef}
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="menu-links">
          <a
            href="https://khaliil.com"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>

          <Link
            href="/"
            className={`menu-link ${router.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            TRIPS
          </Link>

          <a
            href="https://khaliil.com/about"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </a>

        </nav>

<div className="menu-footer">
    <a href="https://khaliil.com/legal" rel="noopener noreferrer" className="menu-link" onClick={() => setMenuOpen(false)} >LEGAL</a>
    <p>© 2025 KHALIIL™</p>
</div>

</div>
</>
);
}