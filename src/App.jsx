import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MobileMenu from './components/Navbar/MobileMenu';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SEOHead from './seo/SEOHead';

// Disable browser's automatic scroll restoration so we control it fully
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

/** Scroll to hash anchor when coming from another page */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = React.useRef(pathname);

  useEffect(() => {
    const pathChanged = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    // Only handle cross-page hash navigation (e.g. /blog → /#about)
    if (pathChanged && hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [lang, setLang] = useState('sr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = useCallback(() => {
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((o) => !o);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-surface-0">
        <SEOHead />
        <Navbar
          lang={lang}
          onLangChange={setLang}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />

        {mobileMenuOpen && (
          <MobileMenu
            lang={lang}
            onLangChange={setLang}
            onClose={closeMobileMenu}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<HomePage onContactClick={scrollToContact} />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
