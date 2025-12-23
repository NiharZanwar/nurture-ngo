import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, details, quote, achievement, image, index, reverse }) => {
  const categoryColors = {
    Environment: 'bg-green-100 text-green-800',
    Community: 'bg-blue-100 text-blue-800',
    Education: 'bg-purple-100 text-purple-800',
    'Global Reach': 'bg-orange-100 text-orange-800',
    Culture: 'bg-pink-100 text-pink-800',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-forest-green to-sunshine-yellow p-1">
          <div className="bg-gray-200 h-64 md:h-80 flex items-center justify-center rounded-xl">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
            ) : (
              <span className="text-6xl text-forest-green opacity-30">🌱</span>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
          {category}
        </span>
        
        <h3 className="text-3xl font-serif font-bold text-forest-green mb-4">
          {title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          {details}
        </p>
        
        {achievement && (
          <div className="bg-sunshine-yellow bg-opacity-20 border-l-4 border-sunshine-yellow p-4 mb-4">
            <p className="font-semibold text-earthy-brown">
              Achievement: <span className="font-normal">{achievement}</span>
            </p>
          </div>
        )}
        
        {quote && (
          <blockquote className="border-l-4 border-forest-green pl-4 italic text-gray-600">
            "{quote}"
          </blockquote>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
