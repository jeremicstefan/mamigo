import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';
import { SERBIA_CONTACT } from '../../constants/contact';
import { NAV_LINKS, LANGUAGES } from '../../constants/navigation';
import logo from '../../assets/hero/mamigo-hausmeister-logo.webp';

const NavLink = ({ href, label }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (pathname === '/') {
        const id = href.startsWith('#') ? href.slice(1) : href;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `/${href}`);
      } else {
        navigate(`/${href}`);
      }
    },
    [href, pathname, navigate]
  );

  if (pathname === '/') {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={`/${href}`}
      onClick={handleClick}
      className="text-text-600 hover:text-text-900 px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-surface-50 w-24 text-center"
    >
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Navbar = ({ lang, onLangChange, mobileMenuOpen, onToggleMobileMenu }) => (
  <nav
    className={`fixed top-0 w-full z-[60] bg-surface-0 md:bg-surface-0/60 md:backdrop-blur-sm ${
      mobileMenuOpen ? 'border-b-0' : 'border-b border-border-200/50'
    }`}
  >
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14 md:h-20 gap-2">
        {/* Left: logo */}
        <div className="flex items-center justify-start min-w-0 bg-transparent">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex-shrink-0 flex items-center bg-transparent"
            aria-label="MAMIGO Hausmeister - početna"
          >
            <img
              src={logo}
              alt="MAMIGO Hausmeister"
              className="h-12 sm:h-14 md:h-20 w-auto object-contain"
              width={256}
              height={171}
              loading="eager"
            />
          </Link>
        </div>

        {/* Center: nav links (desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
          <div className="flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </div>
        </div>

        {/* Right: phone + language switcher (desktop) / hamburger (mobile) */}
        <div className="flex items-center justify-end gap-4 min-w-0">
          <a
            href={SERBIA_CONTACT.phone.href}
            className="hidden md:inline-flex text-sm font-semibold text-text-900 hover:text-brand-500 transition-colors whitespace-nowrap"
          >
            {SERBIA_CONTACT.phone.display}
          </a>
          <div
            className="hidden rounded-lg border border-border-200 overflow-hidden bg-surface-50"
            role="group"
            aria-label="Jezik"
          >
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => onLangChange(code)}
                className={`px-2.5 py-1.5 text-base transition-all sm:px-3 sm:py-2 sm:text-lg ${
                  lang === code
                    ? 'bg-brand-500'
                    : 'hover:bg-surface-100 opacity-60 hover:opacity-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="md:hidden ml-2 p-2 -m-2 rounded-button text-text-900 hover:bg-surface-50 touch-manipulation shrink-0"
            aria-label={mobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <LuX className="w-6 h-6" />
            ) : (
              <LuMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  onToggleMobileMenu: PropTypes.func.isRequired,
};

export default React.memo(Navbar);
