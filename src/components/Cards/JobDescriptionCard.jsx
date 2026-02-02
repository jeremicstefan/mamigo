import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
import Button from '../UI/Button';

const JobDescriptionCard = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 300;
  const shouldTruncate = description.length > previewLength;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h3>
      <div className="prose prose-sm max-w-none">
        <AnimatePresence mode="wait">
          <motion.p
            key={isExpanded ? 'expanded' : 'collapsed'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-700 leading-relaxed whitespace-pre-line"
          >
            {isExpanded || !shouldTruncate
              ? description
              : `${description.substring(0, previewLength)}...`}
          </motion.p>
        </AnimatePresence>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-primary-purple hover:text-primary-purple-dark font-medium text-sm transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      <div className="mt-4">
        <Button
          icon={<FiZap />}
          onClick={() => alert('Generate JD clicked')}
        >
          Generate JD
        </Button>
      </div>
    </motion.div>
  );
};

export default JobDescriptionCard;

