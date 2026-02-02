import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMoreVertical, FiFilter, FiHelpCircle, FiZap } from 'react-icons/fi';
import { jobData } from '../data/jobData';
import MetricCard from '../components/Cards/MetricCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Button from '../components/UI/Button';
import ManageSkillsModal from '../components/Modals/ManageSkillsModal';

const JobDetail = ({ onBack }) => {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params?.jobId;
  
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/job-tracking');
    }
  };
  const [showOnlyApplied, setShowOnlyApplied] = useState(false);
  const [isManageSkillsOpen, setIsManageSkillsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // When showing only applied candidates, show first 5, otherwise paginate normally
  const totalPages = showOnlyApplied ? 1 : 5;
  const candidatesPerPage = showOnlyApplied ? 5 : 9;

  // Sort ALL candidates by match percentage (highest to lowest) FIRST
  const allSortedCandidates = [...jobData.candidateMatches].sort((a, b) => b.match - a.match);

  // Then paginate the already sorted list
  const allCandidates = showOnlyApplied
    ? allSortedCandidates.slice(0, 5) // First 5 candidates when filtered
    : allSortedCandidates.slice(
        (currentPage - 1) * candidatesPerPage,
        currentPage * candidatesPerPage
      );

  // Candidates are already sorted, no need to sort again
  const sortedCandidates = allCandidates;

  // Swipe handlers for horizontal scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const diffX = startX - currentX;

    // If dragged more than 50px horizontally, trigger page change
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentPage < totalPages) {
        // Swipe left - next page
        setCurrentPage(currentPage + 1);
        setIsDragging(false);
      } else if (diffX < 0 && currentPage > 1) {
        // Swipe right - previous page
        setCurrentPage(currentPage - 1);
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    // If dragged more than 50px horizontally, trigger page change
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentPage < totalPages) {
        // Swipe left - next page
        setCurrentPage(currentPage + 1);
        setIsDragging(false);
      } else if (diffX < 0 && currentPage > 1) {
        // Swipe right - previous page
        setCurrentPage(currentPage - 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Distribute candidates into columns
  const candidatesPerColumn = showOnlyApplied ? Math.ceil(sortedCandidates.length / 3) : 3;
  const column1 = sortedCandidates.slice(0, candidatesPerColumn);
  const column2 = sortedCandidates.slice(candidatesPerColumn, candidatesPerColumn * 2);
  const column3 = sortedCandidates.slice(candidatesPerColumn * 2, candidatesPerColumn * 3);

  const COLORS = jobData.candidateReviews.segments.map(seg => seg.color);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-sm text-gray-600">{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };


  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={handleBackClick}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <FiChevronLeft className="text-xl" />
          </motion.button>
          <div className="h-6 w-px bg-gray-300"></div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{jobData.jobTitle}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            icon={<FiZap />}
            onClick={() => alert('Source with ROSI clicked')}
          >
            Source with ROSI
          </Button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <FiMoreVertical className="text-gray-700 text-xl" />
          </motion.button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {Object.values(jobData.metrics).map((metric, index) => (
          <MetricCard
            key={index}
            label={metric.label}
            value={metric.value}
            unit={metric.unit}
            highlight={index < 6}
          />
        ))}
      </div>

      {/* Candidate Match via ROSI */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Candidate Match via ROSI</h2>
            <FiHelpCircle className="text-gray-400 cursor-help" />
          </div>
          <button
            onClick={() => setIsManageSkillsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-gray-700"
          >
            <FiFilter className="text-gray-500" />
            Manage
          </button>
        </div>

        {/* Candidates in 3 Columns (top-to-bottom, left-to-right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Column 1 */}
          <div className="space-y-4">
            {column1.map((candidate, index) => (
              <motion.div
                key={`col1-${candidate.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 text-primary-purple font-semibold text-base flex-shrink-0"
                    >
                      {candidate.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{candidate.name}</p>
                      {candidate.source && (
                        <p className="text-xs text-gray-500 mt-0.5">{candidate.source}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-semibold text-primary-purple">{candidate.match}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="space-y-4">
            {column2.map((candidate, index) => (
              <motion.div
                key={`col2-${candidate.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 text-primary-purple font-semibold text-base flex-shrink-0"
                    >
                      {candidate.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{candidate.name}</p>
                      {candidate.source && (
                        <p className="text-xs text-gray-500 mt-0.5">{candidate.source}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-semibold text-primary-purple">{candidate.match}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="space-y-4">
            {column3.map((candidate, index) => (
              <motion.div
                key={`col3-${candidate.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 text-primary-purple font-semibold text-base flex-shrink-0"
                    >
                      {candidate.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{candidate.name}</p>
                      {candidate.source && (
                        <p className="text-xs text-gray-500 mt-0.5">{candidate.source}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-semibold text-primary-purple">{candidate.match}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Checkbox and Pagination */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyApplied}
              onChange={(e) => {
                setShowOnlyApplied(e.target.checked);
                if (e.target.checked) {
                  setCurrentPage(1); // Reset to first page when filtering
                }
              }}
              className="rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
            />
            <span className="text-sm text-gray-700">Show only candidates who have applied to this job</span>
          </label>
          {!showOnlyApplied && (
            <div
              className="flex items-center gap-3 select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              <div className="flex items-center gap-2 px-2 overflow-x-auto">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-full transition-all duration-200 flex-shrink-0 ${
                      currentPage === page
                        ? 'w-3 h-3 bg-white border-2 border-primary-purple'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    title={`Go to page ${page}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section - Three Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Job Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Overview</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Job Title</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {jobData.jobTitle}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Posting Status</p>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  {jobData.postingStatus}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Tracking Code</p>
                <p className="text-sm font-medium text-gray-900">{jobData.trackingCode}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">CX Career Site Links</p>
                <p className="text-sm font-medium text-primary-purple">{jobData.cxCareerSiteLinks}</p>
              </div>
            </div>
          </div>

          {/* Hiring Team */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Team</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Recruiter</p>
                <p className="text-sm font-medium text-primary-purple">{jobData.stakeholders.recruiter}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Hiring Manager</p>
                <p className="text-sm font-medium text-primary-purple">{jobData.stakeholders.hiringManager}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Recruiting Manager</p>
                <p className="text-sm font-medium text-primary-purple">{jobData.stakeholders.recruitingCoordinator}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Recruiting Team</p>
                <p className="text-sm font-medium text-primary-purple">{jobData.stakeholders.recruitingTeam}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Candidate Sources</h3>
          <div className="relative flex items-center justify-center flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={jobData.candidateReviews.segments}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {jobData.candidateReviews.segments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">{jobData.candidateReviews.total}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {jobData.candidateReviews.segments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between text-sm py-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-gray-700">{segment.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{segment.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Funnel</h3>
          <div className="flex flex-col justify-between flex-1 min-h-0">
            {jobData.recruitmentFunnel.slice(0, 8).map((stage, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{stage.stage}</span>
                  <span className={`text-sm font-semibold ${index < 6 ? 'text-primary-purple' : 'text-gray-900'}`}>
                    {stage.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(stage.value / jobData.recruitmentFunnel[0].value) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="h-full bg-primary-purple rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manage Skills Modal */}
      <ManageSkillsModal
        isOpen={isManageSkillsOpen}
        onClose={() => setIsManageSkillsOpen(false)}
      />
    </div>
  );
};

export default JobDetail;
