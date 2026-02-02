import React from 'react';
import { motion } from 'framer-motion';

const PreferredSkillsCard = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Skills</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ x: 4 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
              <span className="text-sm font-semibold text-gray-900">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ delay: index * 0.05, duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-purple to-primary-purple-light rounded-full group-hover:from-primary-purple-dark group-hover:to-primary-purple transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PreferredSkillsCard;
