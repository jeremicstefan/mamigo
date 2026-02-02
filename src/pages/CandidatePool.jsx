import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiChevronDown, FiChevronUp, FiUser, FiCheckCircle, FiCalendar } from 'react-icons/fi';
import { FaFlagUsa, FaHandshake } from 'react-icons/fa';
import Button from '../components/UI/Button';

const CandidatePool = () => {
  const [selectedCandidates, setSelectedCandidates] = useState(new Set());
  const [sortBy, setSortBy] = useState({ column: 'candidate', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(15);
  const [enteredDays, setEnteredDays] = useState(90);
  const [isLoading, setIsLoading] = useState(true);

  const candidates = [
    {
      id: 1,
      name: 'Aaron Salmon',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/11/25',
      isCurrentEmployee: true,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 2,
      name: 'Adam Podhaiski',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/5/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '11/7/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: null,
    },
    {
      id: 4,
      name: 'Bob Smith',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '10/24/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'Software Engineer', stage: 'Offer Stage' },
        { position: 'Senior Developer', stage: null }
      ],
    },
    {
      id: 5,
      name: 'Carol White',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Approval',
      enterDate: '11/19/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 6,
      name: 'David Brown',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Extended',
      enterDate: '12/1/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Account Executive', stage: null },
        { position: 'Sales Manager', stage: 'Hired Stage' },
        { position: 'Business Development Rep', stage: null }
      ],
    },
    { 
      id: 7, 
      name: 'Emma Wilson', 
      jobTitle: 'Benefits Administrator', 
      currentStage: '3rd Party Sourced', 
      enterDate: '11/15/25',
      isCurrentEmployee: true,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: null,
    },
    { 
      id: 8, 
      name: 'Frank Miller', 
      jobTitle: 'Benefits Administrator', 
      currentStage: 'Internet Applicant', 
      enterDate: '10/30/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: ['Sales Manager'],
    },
    { 
      id: 9, 
      name: 'Grace Lee', 
      jobTitle: 'Benefits Administrator', 
      currentStage: '3rd Party Sourced', 
      enterDate: '12/8/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    { 
      id: 10, 
      name: 'Henry Davis', 
      jobTitle: 'Benefits Administrator', 
      currentStage: 'Offer Approval', 
      enterDate: '11/22/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: ['Marketing Manager'],
    },
    {
      id: 11,
      name: 'Ivy Chen',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/3/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Business Analyst', stage: 'Offer Stage' },
        { position: 'Data Analyst', stage: 'Offer Stage' }
      ],
    },
    {
      id: 12,
      name: 'Jack Taylor',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '11/28/25',
      isCurrentEmployee: true,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 13,
      name: 'Kate Anderson',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/6/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Marketing Manager', stage: 'Hired Stage' },
        { position: 'Brand Manager', stage: 'Hired Stage' }
      ],
    },
    {
      id: 14,
      name: 'Liam Brown',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Extended',
      enterDate: '11/20/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 15,
      name: 'Mia Garcia',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/9/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'Frontend Developer', stage: 'Hired Stage' },
        { position: 'Full Stack Developer', stage: 'Hired Stage' }
      ],
    },
    {
      id: 16,
      name: 'Noah Martinez',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '11/25/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'Senior Financial Analyst', stage: 'Offer Stage' },
        { position: 'Financial Analyst', stage: null }
      ],
    },
    {
      id: 17,
      name: 'Olivia Rodriguez',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Approval',
      enterDate: '12/2/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: null,
    },
    {
      id: 18,
      name: 'Paul Thompson',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '11/18/25',
      isCurrentEmployee: true,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Account Manager', stage: 'Hired Stage' },
        { position: 'Sales Manager', stage: null }
      ],
    },
    {
      id: 19,
      name: 'Quinn White',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '12/7/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'Technical Writer', stage: 'Offer Stage' },
        { position: 'Content Strategist', stage: null }
      ],
    },
    {
      id: 20,
      name: 'Ryan Johnson',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '11/30/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 21,
      name: 'Sarah Williams',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Extended',
      enterDate: '12/4/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'HR Generalist', stage: 'Offer Stage' },
        { position: 'HR Coordinator', stage: null }
      ],
    },
    {
      id: 22,
      name: 'Thomas Moore',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '11/27/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Inside Sales', stage: 'Hired Stage' },
        { position: 'Account Executive', stage: 'Hired Stage' }
      ],
    },
    {
      id: 23,
      name: 'Uma Patel',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '12/10/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'QA Engineer', stage: 'Offer Stage' },
        { position: 'Test Engineer', stage: 'Hired Stage' }
      ],
    },
    {
      id: 24,
      name: 'Victor Kim',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Approval',
      enterDate: '11/23/25',
      isCurrentEmployee: true,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 25,
      name: 'Wendy Zhang',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/5/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'UI Designer', stage: 'Offer Stage' },
        { position: 'UX Designer', stage: null }
      ],
    },
    {
      id: 26,
      name: 'Xavier Lopez',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '11/29/25',
      isCurrentEmployee: false,
      isVeteran: true,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'IT Administrator', stage: 'Offer Stage' },
        { position: 'Help Desk Manager', stage: 'Hired Stage' }
      ],
    },
    {
      id: 27,
      name: 'Yara Singh',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/1/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: null,
    },
    {
      id: 28,
      name: 'Zoe Anderson',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Offer Extended',
      enterDate: '11/26/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Senior Account Manager', stage: 'Offer Stage' },
        { position: 'Account Executive', stage: null }
      ],
    },
    {
      id: 29,
      name: 'Alex Thompson',
      jobTitle: 'Benefits Administrator',
      currentStage: 'Internet Applicant',
      enterDate: '12/8/25',
      isCurrentEmployee: false,
      isVeteran: false,
      hasOtherApplication: false,
      offerOrHiredFor: [
        { position: 'UX Designer', stage: 'Offer Stage' },
        { position: 'Product Designer', stage: null }
      ],
    },
    {
      id: 30,
      name: 'Blake Mitchell',
      jobTitle: 'Benefits Administrator',
      currentStage: '3rd Party Sourced',
      enterDate: '12/11/25',
      isCurrentEmployee: true,
      isVeteran: true,
      hasOtherApplication: true,
      offerOrHiredFor: [
        { position: 'Senior Network Engineer', stage: 'Offer Stage' },
        { position: 'Network Administrator', stage: null }
      ],
    },
  ];

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
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </td>
    </tr>
  );


  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCandidates(new Set(candidates.map(c => c.id)));
    } else {
      setSelectedCandidates(new Set());
    }
  };

  const handleSelectCandidate = (candidateId) => {
    const newSelected = new Set(selectedCandidates);
    if (newSelected.has(candidateId)) {
      newSelected.delete(candidateId);
    } else {
      newSelected.add(candidateId);
    }
    setSelectedCandidates(newSelected);
  };

  const handleSort = (column) => {
    setSortBy({
      column,
      direction: sortBy.column === column && sortBy.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const sortedCandidates = [...candidates].sort((a, b) => {
    let aVal, bVal;
    switch (sortBy.column) {
      case 'candidate':
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
        break;
      case 'jobTitle':
        aVal = a.jobTitle.toLowerCase();
        bVal = b.jobTitle.toLowerCase();
        break;
      case 'currentStage':
        aVal = a.currentStage.toLowerCase();
        bVal = b.currentStage.toLowerCase();
        break;
      case 'enterDate':
        aVal = new Date(a.enterDate);
        bVal = new Date(b.enterDate);
        break;
      default:
        return 0;
    }
    
    if (aVal < bVal) return sortBy.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortBy.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(candidates.length / resultsPerPage);
  const paginatedCandidates = sortedCandidates.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const getSortIcon = (column) => {
    if (sortBy.column !== column) return null;
    return sortBy.direction === 'asc' ? <FiChevronUp className="inline ml-1" /> : <FiChevronDown className="inline ml-1" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
      {/* Header */}
      <div className="mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-1"
        >
          Candidate Pool
        </motion.h1>
        <p className="text-gray-600">
          Manage and review all candidates in your talent pool.
        </p>
      </div>

      {/* Header with filters, count and actions */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm text-gray-600">Candidates found: <span className="font-medium text-primary-purple">{candidates.length}</span></span>
          <span className="text-sm text-gray-600">Entered in the last: <span className="font-medium text-gray-900">{enteredDays} Days</span></span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select 
              value={resultsPerPage} 
              onChange={(e) => {
                setResultsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page when changing results per page
              }}
              className="px-3 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple text-sm appearance-none bg-white"
            >
              <option value={15}>15 Results Per Page</option>
              <option value={25}>25 Results Per Page</option>
              <option value={50}>50 Results Per Page</option>
              <option value={100}>100 Results Per Page</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <Button variant="primary">
            Take Action <FiChevronDown className="inline ml-1" />
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
                    checked={selectedCandidates.size === candidates.length && candidates.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
                  />
                </th>
                <th 
                  className="pl-0.5 pr-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSort('candidate')}
                >
                  Candidate {getSortIcon('candidate')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Indicators
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSort('jobTitle')}
                >
                  Job Title {getSortIcon('jobTitle')}
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSort('currentStage')}
                >
                  Current Stage {getSortIcon('currentStage')}
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSort('enterDate')}
                >
                  Enter Date {getSortIcon('enterDate')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading
                ? Array.from({ length: resultsPerPage }, (_, i) => <SkeletonRow key={i} />)
                : paginatedCandidates.map((candidate, index) => (
                <tr
                  key={candidate.id}
                  className="cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="pl-4 pr-0.5 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCandidates.has(candidate.id)}
                      onChange={() => handleSelectCandidate(candidate.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded border-gray-300 text-primary-purple focus:ring-primary-purple"
                    />
                  </td>
                  <td className="pl-0.5 pr-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative group flex-shrink-0">
                        <div 
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle CV preview
                            alert(`Preview CV for ${candidate.name}`);
                          }}
                        >
                          <FiFileText className="text-gray-400 group-hover:text-primary-purple transition-colors duration-200" />
                        </div>
                        <div className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-normal">
                          Click to preview CV/Resume
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{candidate.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Fixed 4 spots for indicators */}
                      <div className="w-8 h-8 flex items-center justify-center relative group">
                        {candidate.isCurrentEmployee ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700">
                            <FiUser className="text-sm" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400">
                            <FiUser className="text-sm" />
                          </span>
                        )}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                          {candidate.isCurrentEmployee ? 'Current Employee' : 'Not a current employee'}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center relative group">
                        {candidate.isVeteran ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">
                            <FaFlagUsa className="text-sm" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400">
                            <FaFlagUsa className="text-sm" />
                          </span>
                        )}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                          {candidate.isVeteran ? 'U.S. Veteran' : 'Not a U.S. veteran'}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center relative group">
                        {candidate.hasOtherApplication ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700">
                            <FiCheckCircle className="text-sm" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400">
                            <FiCheckCircle className="text-sm" />
                          </span>
                        )}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                          {candidate.hasOtherApplication ? 'Has other application' : 'No other application'}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                      <div className="w-10 h-8 flex items-center justify-center relative group">
                        {candidate.offerOrHiredFor && Array.isArray(candidate.offerOrHiredFor) && candidate.offerOrHiredFor.some(item => item.stage) ? (() => {
                          return (
                            <>
                              <div className="inline-flex items-center justify-center gap-1 w-10 h-8 rounded-full bg-purple-100 text-purple-700 relative">
                                <FiCalendar className="text-sm flex-shrink-0" />
                                <span className="text-xs font-semibold">{candidate.offerOrHiredFor.length}</span>
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                                <div className="flex flex-col gap-1">
                                  {candidate.offerOrHiredFor.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <span className="text-purple-400 flex-shrink-0">•</span>
                                      <span className="flex-shrink-0">
                                        {item.position}
                                        {item.stage && <span className="text-purple-300"> ({item.stage})</span>}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                </div>
                              </div>
                            </>
                          );
                        })(                        ) : candidate.offerOrHiredFor && typeof candidate.offerOrHiredFor === 'object' && candidate.offerOrHiredFor.position && candidate.offerOrHiredFor.stage ? (() => {
                          return (
                            <>
                              <div className="inline-flex items-center justify-center gap-1 w-10 h-8 rounded-full bg-purple-100 text-purple-700 relative">
                                <FiCalendar className="text-sm flex-shrink-0" />
                                <span className="text-xs font-semibold">1</span>
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-purple-400 flex-shrink-0">•</span>
                                      <span className="flex-shrink-0">
                                        {candidate.offerOrHiredFor.position}
                                        {candidate.offerOrHiredFor.stage && <span className="text-purple-300"> ({candidate.offerOrHiredFor.stage})</span>}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                </div>
                              </div>
                            </>
                          );
                        })() : (
                          <>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 relative">
                              <FiCalendar className="text-sm" />
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
                                No offer or hired stage
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{candidate.jobTitle}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{candidate.currentStage}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{candidate.enterDate}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
                currentPage === page
                  ? 'bg-primary-purple text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CandidatePool;
