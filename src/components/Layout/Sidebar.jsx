import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBarChart2, 
  FiBriefcase, 
  FiUsers, 
  FiSettings, 
  FiFileText, 
  FiUserCheck,
  FiHelpCircle,
  FiCode,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import AppSwitcher from '../UI/AppSwitcher';

const Sidebar = ({ isCollapsed, onToggle, currentPage, onNavigate }) => {
  const [expandedMenu, setExpandedMenu] = useState(() => {
    // Expand candidates menu if on candidate-related pages
    if (currentPage && (
      currentPage.startsWith('/candidate-pool') || 
      currentPage.startsWith('/scheduling-templates') || 
      currentPage.startsWith('/source-rosi') || 
      currentPage.startsWith('/eeo-info') || 
      currentPage.startsWith('/employee-referrals') || 
      currentPage.startsWith('/folders') ||
      currentPage.startsWith('/recycle-bin') || 
      currentPage.startsWith('/reviews') ||
      currentPage.startsWith('/status') || 
      currentPage.startsWith('/upload')
    )) {
      return 'candidates';
    }
    return 'jobs';
  });

  // Update expanded menu when currentPage changes
  useEffect(() => {
    if (currentPage && (
      currentPage.startsWith('/candidate-pool') || 
      currentPage.startsWith('/scheduling-templates') || 
      currentPage.startsWith('/source-rosi') || 
      currentPage.startsWith('/eeo-info') || 
      currentPage.startsWith('/employee-referrals') || 
      currentPage.startsWith('/folders') ||
      currentPage.startsWith('/recycle-bin') || 
      currentPage.startsWith('/reviews') ||
      currentPage.startsWith('/status') || 
      currentPage.startsWith('/upload')
    )) {
      setExpandedMenu('candidates');
    } else if (currentPage && (
      currentPage.startsWith('/job-tracking') || 
      currentPage.startsWith('/job/') ||
      currentPage.startsWith('/create-job') ||
      currentPage.startsWith('/manage-requisitions')
    )) {
      setExpandedMenu('jobs');
    }
  }, [currentPage]);

  const menuItems = [
    { id: 'reporting', label: 'Reporting & Analytics', icon: FiBarChart2 },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: FiBriefcase,
      subItems: [
        { label: 'Job Tracking', route: '/job-tracking' },
        { label: 'Create Job Posting', route: '/create-job' },
        { label: 'Manage Requisitions', route: '/manage-requisitions' },
        { label: 'Job Tracking (Classic)', route: '/job-tracking-classic' },
        { label: 'View Job Offers', route: '/job-offers' },
        { label: 'Job Templates', route: '/job-templates' },
      ],
    },
    {
      id: 'candidates',
      label: 'Candidates',
      icon: FiUsers,
      subItems: [
        { label: 'Candidate Pool', route: '/candidate-pool' },
        { label: 'Scheduling Templates', route: '/scheduling-templates' },
        { label: 'Source with ROSI', route: '/source-rosi' },
        { label: 'EEO Info', route: '/eeo-info' },
        { label: 'Employee Referrals', route: '/employee-referrals' },
        { label: 'Folders', route: '/folders' },
        { label: 'Recycle Bin', route: '/recycle-bin' },
        { label: 'Reviews', route: '/reviews' },
        { label: 'Status', route: '/status' },
        { label: 'Upload', route: '/upload' },
      ],
    },
    { id: 'administration', label: 'Administration', icon: FiSettings },
    { id: 'reports', label: 'Reports (Legacy)', icon: FiFileText },
    { id: 'workforce', label: 'What\'s New?', icon: FiUserCheck },
    { id: 'help', label: 'Help', icon: FiHelpCircle },
    { id: 'development', label: 'Development', icon: FiCode },
  ];

  const toggleSubMenu = (id) => {
    if (expandedMenu === id) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(id);
    }
  };

  const collapsedWidth = 64; // Icon-only width
  const expandedWidth = 280;

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isCollapsed ? collapsedWidth : expandedWidth,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-30 overflow-hidden flex flex-col"
    >
      {/* App Switcher at Top with Collapse Button */}
      <div className="pt-4 pb-3 border-b border-gray-200 relative overflow-visible z-40">
        {!isCollapsed ? (
          <div className="w-full flex items-center gap-2 px-4">
            <div className="flex-1">
              <AppSwitcher currentApp="recruit" />
            </div>
            {/* Collapse Button - Same height as App Switcher */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onToggle}
              className="h-[36px] px-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200 bg-gray-50 flex items-center justify-center"
              aria-label="Toggle sidebar"
            >
              <FiChevronLeft className="text-gray-500" />
            </motion.button>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Expand sidebar"
            >
              <FiChevronRight className="text-gray-500 text-lg" />
            </motion.button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className={`space-y-1 ${isCollapsed ? 'px-2 flex items-center flex-col' : 'px-4'}`}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Only highlight active menu item if current page matches
            const isActive = item.id === 'jobs' 
              ? (currentPage.startsWith('/job-tracking') || currentPage.startsWith('/job/') || currentPage.startsWith('/create-job') || currentPage.startsWith('/manage-requisitions'))
              : item.id === 'candidates'
              ? (currentPage.startsWith('/candidate-pool') || currentPage.startsWith('/scheduling-templates') || currentPage.startsWith('/source-rosi') || currentPage.startsWith('/eeo-info') || currentPage.startsWith('/employee-referrals') || currentPage.startsWith('/folders') || currentPage.startsWith('/recycle-bin') || currentPage.startsWith('/reviews') || currentPage.startsWith('/status') || currentPage.startsWith('/upload'))
              : false;
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedMenu === item.id;

            return (
              <div key={item.id} className={isCollapsed ? 'w-full flex justify-center' : 'w-full'}>
                <button
                  onClick={() => hasSubItems && !isCollapsed && toggleSubMenu(item.id)}
                  className={`w-full flex items-center rounded-lg transition-all duration-200 ${
                    isCollapsed ? 'px-0 py-3 justify-center' : 'px-4 py-3 justify-between'
                  } ${
                    isActive
                      ? 'bg-primary-purple text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
                    <Icon className={`${isCollapsed ? 'text-xl' : 'text-lg'} flex-shrink-0`} />
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                  </div>
                  {hasSubItems && !isCollapsed && (
                    <motion.span
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ›
                    </motion.span>
                  )}
                </button>

                <AnimatePresence>
                  {hasSubItems && isExpanded && !isCollapsed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden relative"
                    >
                      <div className={`py-2 space-y-1 ${isCollapsed ? 'px-2' : ''}`}>
                        {item.subItems.map((subItem, index) => {
                          // Keep Job Tracking selected when on job detail pages
                          const isActive = subItem.route === '/job-tracking' 
                            ? (currentPage === subItem.route || currentPage.startsWith('/job/'))
                            : (currentPage === subItem.route || currentPage.startsWith(subItem.route));
                          if (isCollapsed) return null; // Hide sub-items when collapsed
                          return (
                            <button
                              key={index}
                              onClick={() => onNavigate && subItem.route && onNavigate(subItem.route)}
                              className={`w-full flex items-center text-left py-2 rounded-lg transition-all duration-150 text-sm relative ${
                                isActive
                                  ? 'bg-primary-purple bg-opacity-10 text-primary-purple font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                              style={{
                                paddingLeft: '46px', // Align text with parent text (px-4 + icon + gap-3 = 16px + 18px + 12px)
                              }}
                            >
                              {/* Active dot frame centered under parent icon (icon center at 25px from left) */}
                              <div 
                                className="absolute w-5 h-5 flex items-center justify-center flex-shrink-0"
                                style={{
                                  left: '15px', // 25px (icon center) - 10px (half frame width) = 15px
                                }}
                              >
                                {isActive ? (
                                  <motion.div
                                    layoutId="activeIndicator"
                                    className="w-1.5 h-1.5 rounded-full bg-primary-purple"
                                  />
                                ) : (
                                  <div className="w-1.5 h-1.5" />
                                )}
                              </div>
                              <span className="flex-1">{subItem.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

