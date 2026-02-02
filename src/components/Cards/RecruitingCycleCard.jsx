import React from 'react';
import { motion } from 'framer-motion';

const RecruitingCycleCard = ({ cycle }) => {
  const fields = [
    { label: 'Status', value: cycle.status },
    { label: 'Original Open Date', value: cycle.originalOpenDate },
    { label: 'Current Status Date', value: cycle.currentStatusDate },
    { label: 'Target Close Date', value: cycle.targetCloseDate },
    { label: 'Hiring Team', value: cycle.hiringTeam },
  ];

  const getStatusColor = (status) => {
    if (status.toLowerCase() === 'open') {
      return 'bg-green-100 text-green-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruiting Cycle</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {fields.map((field, index) => (
          <div key={index} className="border-b border-gray-100 pb-2">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{field.label}</p>
            {field.label === 'Status' ? (
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(field.value)}`}>
                {field.value}
              </span>
            ) : (
              <p className="text-sm font-medium text-gray-900">{field.value}</p>
            )}
          </div>
        ))}
      </div>
      {cycle.notes && cycle.notes.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Notes:</p>
          <ul className="space-y-2">
            {cycle.notes.map((note, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-primary-purple mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default RecruitingCycleCard;
