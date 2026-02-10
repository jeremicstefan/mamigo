import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SERBIA_CONTACT } from '../../constants/contact';
import { NAV_LINKS, LANGUAGES } from '../../constants/navigation';

const MobileMenu = ({ lang, onLangChange, onClose }) => (
  <>
    <button
      type="button"
      onClick={onClose}
      className="fixed inset-0 z-[45] bg-black/20 md:hidden"
      aria-label="Zatvori meni"
    />
    <div
      className="fixed left-0 right-0 top-14 z-[50] md:hidden bg-surface-0 rounded-b-2xl border border-t-0 border-border-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 py-3 flex flex-col gap-1"
      aria-hidden="false"
    >
      {NAV_LINKS.map(({ href, label, isRoute }) => (
        <Link
          key={href}
          to={isRoute ? href : `/${href}`}
          onClick={onClose}
          className="block py-2.5 px-3 text-sm font-medium text-text-900 hover:bg-surface-50 rounded-button touch-manipulation"
        >
          {label}
        </Link>
      ))}
      <a
        href={SERBIA_CONTACT.phone.href}
        onClick={onClose}
        className="py-3 px-4 text-sm font-semibold text-brand-500 hover:bg-surface-50 rounded-button touch-manipulation"
      >
        {SERBIA_CONTACT.phone.display}
      </a>
      <div
        className="hidden flex rounded-lg border border-border-200 overflow-hidden bg-surface-50 mt-2"
        role="group"
        aria-label="Jezik"
      >
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            onClick={() => onLangChange(code)}
            className={`flex-1 px-3 py-2 text-base transition-all ${
              lang === code
                ? 'bg-brand-500 text-white'
                : 'bg-surface-50 hover:bg-surface-100 text-text-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </>
);

MobileMenu.propTypes = {
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(MobileMenu);
