import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders children only when the section is near the viewport (Intersection Observer).
 * Use for below-the-fold sections so their content and images load when the user scrolls.
 * When not visible, renders a placeholder so layout doesn't collapse.
 * @param {string} [rootMargin='200px'] - Margin around viewport to start loading
 * @param {number} [threshold=0] - Ratio of visibility (0 = any pixel visible)
 * @param {string} [placeholderClassName='min-h-[280px]'] - Class for placeholder (reserve space, e.g. min-h-[400px])
 */
const LazySection = ({
  children,
  rootMargin = '200px',
  threshold = 0,
  className = '',
  placeholderClassName = 'min-h-[280px]',
  as: Component = 'div',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <Component ref={ref} className={className} {...props}>
      {isVisible ? (
        <div className="animate-reveal-in">
          {children}
        </div>
      ) : (
        <div className={placeholderClassName} aria-hidden />
      )}
    </Component>
  );
};

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  className: PropTypes.string,
  placeholderClassName: PropTypes.string,
  as: PropTypes.elementType,
};

export default LazySection;
