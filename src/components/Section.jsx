import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = '', background = 'light' }) => {
  const backgrounds = {
    light: 'bg-soft-beige',
    white: 'bg-white',
    green: 'bg-forest-green text-white',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
