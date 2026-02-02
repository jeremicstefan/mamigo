import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, value, unit, highlight = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-2xl font-bold ${highlight ? 'text-primary-purple' : 'text-gray-900'}`}>
          {value}
        </p>
        <p className="text-sm text-gray-500">{unit}</p>
      </div>
    </motion.div>
  );
};

export default MetricCard;
