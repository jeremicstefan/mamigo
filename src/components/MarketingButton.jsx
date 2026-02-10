import React from 'react';
import PropTypes from 'prop-types';

/**
 * Marketing site button component with consistent styling from design tokens.
 * All marketing CTAs use this component; no size/color overrides.
 *
 * @param {'primary' | 'secondary'} variant - Button style variant
 * @param {'default' | 'compact'} size - default = 44-48px height; compact = nav/small
 * @param {string} href - If provided, renders as an anchor tag
 * @param {React.ReactNode} icon - Optional icon
 * @param {string} className - Layout only (e.g. w-full); no size/color overrides
 */
const MarketingButton = ({
  variant = 'primary',
  size = 'default',
  href,
  icon,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-button
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
  `.trim().replace(/\s+/g, ' ');

  const sizeStyles = {
    default: 'px-6 py-3 text-base font-semibold',
    compact: 'px-4 py-2 text-sm font-semibold',
  };

  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600',
    secondary: 'bg-transparent text-text-900 border border-border-200 hover:bg-surface-50',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  // Render as anchor if href is provided
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

MarketingButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['default', 'compact']),
  href: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MarketingButton;
