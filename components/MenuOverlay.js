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

    // For tour subpages
    if (path.startsWith('/tour') && path !== '/tour') {
      const parts = path.split('/');
      return parts[2].toUpperCase(); // gets /tour/subpage -> SUBPAGE
    }

    // Normal pages
    switch (path) {
      case '/':
        return 'TOUR';
      default:
        return '';
    }
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

      <div className={`menu-cover ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>

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
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>

          <Link
            href="/tour"
            className={`menu-link ${router.pathname.startsWith('/tour') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            TOUR
          </Link>

          <a
            href="https://khaliil.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </a>

          <a
            href="https://khaliil.com/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            LEGAL
          </a>
        </nav>

        <div className="menu-footer">© 2025 KHALIIL</div>
      </div>
    </>
  );
}