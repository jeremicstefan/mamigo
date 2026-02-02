import React from 'react';
import { motion } from 'framer-motion';

const CompensationCard = ({ compensation }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: compensation.salaryCurrency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const fields = [
    { label: 'Min Salary', value: formatCurrency(compensation.minSalary) },
    { label: 'Max Salary', value: formatCurrency(compensation.maxSalary) },
    { label: 'Salary Currency', value: compensation.salaryCurrency },
    { label: 'Salary Type', value: compensation.salaryType },
    { label: 'Min Bonus', value: formatCurrency(compensation.minBonus) },
    { label: 'Max Bonus', value: formatCurrency(compensation.maxBonus) },
    { label: 'Bonus Type', value: compensation.bonusType },
    { label: 'Target Bonus', value: `${compensation.targetBonus}%` },
    { label: 'Target Bonus Currency', value: compensation.targetBonusCurrency },
    { label: 'Target Bonus Type', value: compensation.targetBonusType },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Compensation & Budget</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div key={index} className="border-b border-gray-100 pb-2">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{field.label}</p>
            <p className="text-sm font-medium text-gray-900">{field.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompensationCard;
