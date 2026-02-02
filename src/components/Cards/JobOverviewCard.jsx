import React from 'react';
import { motion } from 'framer-motion';

const JobOverviewCard = ({ data }) => {
  const fields = [
    { label: 'Job Title', value: data.jobTitle },
    { label: 'Hiring Team', value: data.hiringTeam },
    { label: 'Position Type', value: data.positionType },
    { label: 'Job ID', value: data.jobId },
    { label: 'Location', value: data.location },
    { label: 'Job Category', value: data.jobCategory },
    { label: 'Job Level', value: data.jobLevel },
    { label: 'Work Type', value: data.workType },
    { label: 'Job Group', value: data.jobGroup },
    { label: 'Company', value: data.company },
    { label: 'Department', value: data.department },
    { label: 'Reports To', value: data.reportsTo },
    { label: 'Direct Reports', value: data.directReports },
    { label: 'Travel Required', value: data.travelRequired },
    { label: 'Relocation Assistance', value: data.relocationAssistance },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Overview</h3>
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

export default JobOverviewCard;
