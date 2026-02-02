import React from 'react';
import { motion } from 'framer-motion';

const CommonRolesCard = ({ roles }) => {
  const fields = [
    { label: 'Category', value: roles.category },
    { label: 'Salary Grade', value: roles.salaryGrade },
    { label: 'Overtime Eligible', value: roles.overtimeEligible },
    { label: 'Target Time to Fill', value: roles.targetTimeToFill },
    { label: 'Target Cost to Fill', value: roles.targetCostToFill },
    { label: 'Target Quality of Hire', value: roles.targetQualityOfHire },
    { label: 'Target Retention Rate', value: roles.targetRetentionRate },
    { label: 'Target Diversity Rate', value: roles.targetDiversityRate },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Roles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4 }}
            className="border-b border-gray-100 pb-2"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{field.label}</p>
            <p className="text-sm font-medium text-gray-900">{field.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommonRolesCard;
