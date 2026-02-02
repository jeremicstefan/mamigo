import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const apps = [
  { id: 'recruit', name: 'Recruit', color: '#7C3AED' }, // Purple
  { id: 'workflow', name: 'Workflow', color: '#10B981' }, // Green
  { id: 'lean', name: 'Lean', color: '#3B82F6' }, // Blue
  { id: 'perform', name: 'Perform', color: '#EC4899' }, // Pink
];

const AppSwitcher = ({ currentApp = 'recruit' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const currentAppData = apps.find(app => app.id === currentApp) || apps[0];

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // 8px = mt-2 (margin-top)
        left: rect.left,
        width: rect.width, // Match button width
      });
    }
  }, [isOpen]);

  return (
    <div className="relative w-full">
      <motion.button
        ref={buttonRef}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[36px] flex items-center justify-between px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: currentAppData.color }}
          />
          <span className="font-semibold text-gray-900">{currentAppData.name}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998]"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] overflow-hidden"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
                width: `${dropdownPosition.width}px`,
              }}
            >
              {apps.filter(app => app.id !== currentApp).map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    setIsOpen(false);
                    // Handle app switching here if needed
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors duration-150"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="font-medium text-gray-700">
                    {app.name}
                  </span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppSwitcher;
