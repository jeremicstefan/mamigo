import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiHelpCircle, FiPlus, FiTrash2, FiAlignJustify } from 'react-icons/fi';
import Button from '../UI/Button';

const ManageSkillsModal = ({ isOpen, onClose }) => {
  const [skills, setSkills] = useState({
    core: [
      { id: 1, name: 'Benefits Plan' },
      { id: 2, name: 'Human Capital Mgmt' },
      { id: 3, name: 'Labor Law Compliance' },
      { id: 4, name: 'Strategic Planning' },
    ],
    preferred: [
      { id: 5, name: 'Reporting' },
      { id: 6, name: 'Analytics' },
      { id: 7, name: 'Vendor Management...' },
      { id: 8, name: 'Directing Teams' },
      { id: 9, name: 'Employee Relations' },
      { id: 10, name: 'Performance Mgmt' },
    ],
    bonus: [
      { id: 11, name: 'Sale Structure' },
      { id: 12, name: 'Statistics' },
      { id: 13, name: 'Expense Control' },
      { id: 14, name: 'Audit Processes' },
      { id: 15, name: 'Benefits Plan' },
    ],
  });

  const [newSkill, setNewSkill] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [draggedSkill, setDraggedSkill] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);

  const columns = [
    { id: 'core', name: 'Core Skills', percentage: 65, color: 'bg-primary-purple', textColor: 'text-white' },
    { id: 'preferred', name: 'Preferred Skills', percentage: 25, color: 'bg-blue-400', textColor: 'text-white' },
    { id: 'bonus', name: 'Bonus Skills', percentage: 10, color: 'bg-gray-400', textColor: 'text-white' },
  ];

  const totalSkills = skills.core.length + skills.preferred.length + skills.bonus.length;
  const maxSkills = 15;

  const handleAddSkill = () => {
    if (newSkill.trim() && totalSkills < maxSkills) {
      // Add to bonus by default (or implement logic to choose column)
      setSkills(prev => ({
        ...prev,
        bonus: [...prev.bonus, { id: Date.now(), name: newSkill.trim() }],
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (columnId, skillId) => {
    setSkills(prev => ({
      ...prev,
      [columnId]: prev[columnId].filter(skill => skill.id !== skillId),
    }));
  };

  const handleDragStart = (e, skill, sourceColumn) => {
    setDraggedSkill({ skill, sourceColumn });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, columnId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverColumn(columnId);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (draggedSkill && draggedSkill.sourceColumn !== targetColumn) {
      setSkills(prev => {
        const newSkills = { ...prev };
        // Remove from source column
        newSkills[draggedSkill.sourceColumn] = newSkills[draggedSkill.sourceColumn].filter(
          skill => skill.id !== draggedSkill.skill.id
        );
        // Add to target column
        newSkills[targetColumn] = [...newSkills[targetColumn], draggedSkill.skill];
        return newSkills;
      });
    }
    setDraggedSkill(null);
    setDragOverColumn(null);
  };

  const handleDragEnd = () => {
    setDraggedSkill(null);
    setDragOverColumn(null);
  };

  const tooltips = {
    core: 'Core Skills are the primary capabilities most closely tied to success in this role and can contribute up to 65% of the overall match score.',
    preferred: 'Preferred Skills are capabilities that are strongly valued for this role and can contribute up to 25% of the overall match score.',
    bonus: 'Bonus Skills are additional capabilities that enhance a candidate\'s fit for the role and can contribute up to 10% of the overall match score.',
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Manage Required Skills</h2>
                  <p className="text-sm text-gray-600 mt-1">Drag and drop skills to adjust their importance weight.</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <FiX className="text-gray-600 text-xl" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {columns.map((column) => (
                    <div 
                      key={column.id} 
                      className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                      onDragOver={(e) => handleDragOver(e, column.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, column.id)}
                    >
                      {/* Column Header */}
                      <div className={`${column.color} ${column.textColor} p-3 flex items-center justify-between relative`}>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{column.name}</span>
                          <span className="text-xs opacity-90">({column.percentage}%)</span>
                          <div className="relative group">
                            <FiHelpCircle className="w-8 h-8 opacity-75 cursor-help" />
                            <div className="absolute left-0 bottom-full mb-2 w-80 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none whitespace-normal">
                              {tooltips[column.id]}
                              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border-2 ${column.textColor === 'text-white' ? 'border-white' : 'border-current'}`}>
                          {skills[column.id].length}
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className={`p-4 min-h-[300px] space-y-2 ${dragOverColumn === column.id ? 'bg-gray-100' : ''}`}>
                        {skills[column.id].map((skill, index) => (
                          <motion.div
                            key={skill.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, skill, column.id)}
                            onDragEnd={handleDragEnd}
                            onHoverStart={() => setHoveredSkill(skill.id)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-2 group cursor-move"
                          >
                            {/* Hamburger Menu Grip Handle */}
                            <FiAlignJustify className="text-gray-400 group-hover:text-gray-600 flex-shrink-0 cursor-move" />
                            <span className="flex-1 text-sm text-gray-900">{skill.name}</span>
                            {/* Always reserve space for trash button to prevent layout shift */}
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                              {hoveredSkill === skill.id && (
                                <motion.button
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  onClick={() => handleRemoveSkill(column.id, skill.id)}
                                  className="p-1 hover:bg-red-50 rounded text-red-600 transition-colors duration-200"
                                >
                                  <FiTrash2 className="text-sm" />
                                </motion.button>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Skill Section */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                        placeholder="Start typing to add a skill (15-skill limit across the 3 columns)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                        disabled={totalSkills >= maxSkills}
                      />
                    </div>
                    <Button
                      icon={<FiPlus />}
                      onClick={handleAddSkill}
                      disabled={totalSkills >= maxSkills || !newSkill.trim()}
                    >
                      Add
                    </Button>
                  </div>
                  {totalSkills >= maxSkills && (
                    <p className="text-sm text-gray-500 mt-2">Maximum of 15 skills reached</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ManageSkillsModal;
