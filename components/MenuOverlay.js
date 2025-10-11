import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();


  const getActivePage = () => {
    switch (router.pathname) {
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
            href="/about"
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
            href="https://khaliil.comlegal"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
            onClick={() => setMenuOpen(false)}
          >
            LEGAL
          </a>   


        </nav>
        
  <div className="menu-footer">
    © 2025 KHALIIL
  </div>
        
      </div>
    </>
  );
}