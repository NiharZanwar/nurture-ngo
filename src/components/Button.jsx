import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-forest-green text-white hover:bg-opacity-90 focus:ring-forest-green',
    secondary: 'bg-sunshine-yellow text-earthy-brown hover:bg-opacity-90 focus:ring-sunshine-yellow',
    outline: 'border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
