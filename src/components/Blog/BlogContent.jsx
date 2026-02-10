import React from 'react';
import PropTypes from 'prop-types';

const BlogContent = ({ sections }) => (
  <div className="prose-mamigo space-y-8 sm:space-y-10">
    {sections.map((section, index) => (
      <div key={index}>
        <h2 className="text-xl sm:text-2xl font-bold text-text-900 mb-3 sm:mb-4 leading-snug">
          {section.heading}
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {section.paragraphs.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="text-base sm:text-lg text-text-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

BlogContent.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default React.memo(BlogContent);
