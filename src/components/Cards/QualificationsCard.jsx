import React from 'react';
import { motion } from 'framer-motion';

const QualificationsCard = ({ qualifications, responsibilities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Key Interest & Qualification
      </h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Required Qualifications:
        </h4>
        <ul className="space-y-2">
          {qualifications.map((qual, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <span className="text-primary-purple mt-1">•</span>
              <span>{qual}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Responsibilities:
        </h4>
        <ul className="space-y-2">
          {responsibilities.map((resp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (qualifications.length + index) * 0.05 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <span className="text-primary-purple mt-1">•</span>
              <span>{resp}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default QualificationsCard;
