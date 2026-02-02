import React from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiHelpCircle, FiUser } from 'react-icons/fi';
import SearchDropdown from '../UI/SearchDropdown';

const Header = ({ sidebarWidth }) => {
  return (
    <header 
      className="fixed top-0 h-16 bg-white border-b border-gray-200 z-20 flex items-center justify-between px-4 md:px-6 shadow-sm transition-all duration-300"
      style={{
        left: `${sidebarWidth}px`,
        right: 0,
      }}
    >
      {/* Left: RIVAL Logo */}
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-primary-purple"
        >
          RIVAL
        </motion.div>
      </div>

      {/* Center: Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <SearchDropdown />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative"
          aria-label="Notifications"
        >
          <FiBell className="text-gray-700 text-xl" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Help"
        >
          <FiHelpCircle className="text-gray-700 text-xl" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Profile"
        >
          <FiUser className="text-gray-700 text-xl" />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
