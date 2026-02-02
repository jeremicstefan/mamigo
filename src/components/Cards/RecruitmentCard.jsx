import React from 'react';
import { motion } from 'framer-motion';

const RecruitmentCard = ({ recruitment }) => {
  const fields = [
    { label: 'Hiring Manager', value: recruitment.hiringManager },
    { label: 'Recruiter', value: recruitment.recruiter },
    { label: 'Recruiting Coordinator', value: recruitment.recruitingCoordinator },
    { label: 'Sourcing Specialist', value: recruitment.sourcingSpecialist },
    { label: 'Talent Acquisition Lead', value: recruitment.talentAcquisitionLead },
    { label: 'HR Business Partner', value: recruitment.hrBusinessPartner },
    { label: 'External Recruiter', value: recruitment.externalRecruiter },
    { label: 'Days to Fill', value: `${recruitment.daysToFill} days` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recruitment & Sourcing
      </h3>
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

export default RecruitmentCard;
