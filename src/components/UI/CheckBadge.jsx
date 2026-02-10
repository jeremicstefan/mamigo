import React from 'react';
import PropTypes from 'prop-types';
import { LuCheckCircle } from 'react-icons/lu';

const CheckBadge = ({ text, iconClassName = 'text-brand-500' }) => (
  <span className="inline-flex items-center gap-2 bg-brand-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-badge text-xs sm:text-sm font-semibold text-text-900 border border-border-200">
    <LuCheckCircle className={iconClassName} />
    {text}
  </span>
);

CheckBadge.propTypes = {
  text: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
};

export default CheckBadge;
