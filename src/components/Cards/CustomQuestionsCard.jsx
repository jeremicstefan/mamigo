import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomQuestionsCard = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: prev[questionId] === answer ? null : answer,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Custom Questions for this Position
      </h3>
      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="border-b border-gray-100 pb-4 last:border-0">
            <p className="text-sm font-medium text-gray-900 mb-3">
              {question.id}. {question.question}
            </p>
            <div className="flex flex-wrap gap-2">
              {question.answers.map((answer, index) => {
                const isSelected = selectedAnswers[question.id] === answer;
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswerSelect(question.id, answer)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-primary-purple text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {answer}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CustomQuestionsCard;
