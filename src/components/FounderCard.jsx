import React from 'react';
import { motion } from 'framer-motion';

const FounderCard = ({ name, role, bio, grade, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="p-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-forest-green to-sunshine-yellow p-1">
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-4xl text-forest-green font-serif">{name.charAt(0)}</span>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-forest-green text-center mb-2">
          {name}
        </h3>
        
        <p className="text-sunshine-yellow font-semibold text-center mb-2">
          {role}
        </p>
        
        <p className="text-earthy-brown text-sm text-center mb-4 italic">
          {grade}
        </p>
        
        <p className="text-gray-700 text-center leading-relaxed">
          {bio}
        </p>
      </div>
    </motion.div>
  );
};

export default FounderCard;
