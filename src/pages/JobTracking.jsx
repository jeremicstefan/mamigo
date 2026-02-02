import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiPlus, FiFilter, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { jobsList } from '../data/jobData';
import Button from '../components/UI/Button';

const JobTracking = ({ onJobClick }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobs, setSelectedJobs] = useState(new Set());
  const [sortBy, setSortBy] = useState({ column: 'title', direction: 'asc' });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton component for table rows
  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="pl-4 pr-0.5 py-4">
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
      </td>
      <td className="pl-0.5 pr-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </td>
    </tr>
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedJobs(new Set(jobsList.map(job => job.id)));
    } else {
      setSelectedJobs(new Set());
    }
  };

  const handleSelectJob = (jobId) => {
    const newSelected = new Set(selectedJobs);
    if (newSelected.has(jobId)) {
      newSelected.delete(jobId);
    } else {
      newSelected.add(jobId);
    }
    setSelectedJobs(newSelected);
  };

  const handleSort = (column) => {
    setSortBy({
      column,
      direction: sortBy.column === column && sortBy.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const getSortIcon = (column) => {
    if (sortBy.column === column) {
      return sortBy.direction === 'asc' ? <FiChevronUp className="inline ml-1" /> : <FiChevronDown className="inline ml-1" />;
    }
    return null;
  };

  const getStatusColor = (status) => {
    if (status === 'Normal - Int./Ext. Applicants') return 'bg-green-100 text-green-800';
    if (status === 'External') return 'bg-blue-100 text-blue-800';
    if (status === 'Limited') return 'bg-yellow-100 text-yellow-800';
    if (status === 'On Hold') return 'bg-orange-100 text-orange-800';
    return 'bg-gray-100 text-gray-800';
  };

  const filteredJobs = jobsList.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.trackingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    let aVal, bVal;
    switch (sortBy.column) {
      case 'title':
        aVal = a.title.toLowerCase();
        bVal = b.title.toLowerCase();
        break;
      case 'trackingCode':
        aVal = a.trackingCode.toLowerCase();
        bVal = b.trackingCode.toLowerCase();
        break;
      case 'location':
        aVal = a.location.toLowerCase();
        bVal = b.location.toLowerCase();
        break;
      case 'postingStatus':
        aVal = a.postingStatus.toLowerCase();
        bVal = b.postingStatus.toLowerCase();
        break;
      case 'resumes':
        aVal = a.resumes;
        bVal = b.resumes;
        break;
      default:
        aVal = a.title.toLowerCase();
        bVal = b.title.toLowerCase();
    }

    if (aVal < bVal) return sortBy.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortBy.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
      {/* Header */}
      <div className="mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-1"
        >
          Job Tracking
        </motion.h1>
        <p className="text-gray-600">
          Manage your open requisitions and candidates.
        </p>
      </div>

      {/* Search and Action Bar */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full md:max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Q Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => alert('Filter clicked')}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-gray-700"
          >
            <FiFilter className="text-gray-500" />
            Filter
          </button>
          <Button
            icon={<FiPlus />}
            onClick={() => alert('Create Job clicked')}
          >
            Create Job
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="pl-4 pr-0.5 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedJobs.size === jobsList.length && jobsList.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
                  />
                </th>
                <th className="pl-0.5 pr-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort('title')}>
                  Internal Job Title {getSortIcon('title')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort('trackingCode')}>
                  Tracking Code {getSortIcon('trackingCode')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort('location')}>
                  Location {getSortIcon('location')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort('postingStatus')}>
                  Posting Status {getSortIcon('postingStatus')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort('resumes')}>
                  Resumes {getSortIcon('resumes')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  My Review
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading
                ? Array.from({ length: 10 }, (_, i) => <SkeletonRow key={i} />)
                : sortedJobs.map((job, index) => (
                <tr
                  key={job.id}
                  className="cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => {
                    if (onJobClick) {
                      onJobClick(job.id);
                    } else {
                      navigate(`/job/${job.id}`);
                    }
                  }}
                >
                  <td className="pl-4 pr-0.5 py-4">
                    <input
                      type="checkbox"
                      checked={selectedJobs.has(job.id)}
                      onChange={() => handleSelectJob(job.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
                    />
                  </td>
                  <td className="pl-0.5 pr-4 py-4">
                    <div className="text-sm font-medium text-gray-900">{job.title}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-600">{job.trackingCode}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-600">{job.location}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.postingStatus)}`}>
                      {job.postingStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 font-medium">{job.resumes}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 font-medium">{job.myReview}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobTracking;
