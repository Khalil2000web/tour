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

    // Index page of Tour
    return 'TOUR';
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
      {/* Button in header */}
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

      {/* Cover overlay */}
      <div
        className={`menu-cover ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menu overlay */}
      <div
        id="main-menu"
        ref={menuRef}
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="menu-links">
          {/* External links */}
          <a
            href="https://khaliil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>

          {/* Tour index */}
          <Link
            href="/"
            className={`menu-link ${router.pathname === '/' ? 'active' : ''}`}
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

        {/* Footer */}
        <div className="menu-footer">© 2025 KHALIIL</div>
      </div>
    </>
  );
}