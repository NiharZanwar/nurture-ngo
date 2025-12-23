import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 to-earthy-brown/70 z-10"></div>
        <div className="w-full h-full bg-gradient-to-b from-forest-green/40 to-soft-beige">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sunshine-yellow text-xl md:text-2xl font-semibold mb-4"
          >
            Wellness Begins with Green
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Wellness Begins with Green.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-soft-beige mb-6"
          >
            Three teenagers, one mission: to nurture the environment and our communities.
          </motion.p>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base md:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            In a world where kindness often feels in short supply, we are proving that youth can lead the way in shaping a better tomorrow. Every smile we see, every tree we grow, every child who discovers a book—these are the seeds of hope we are planting.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="relative z-30"
          >
            <Button
              onClick={scrollToContact}
              variant="secondary"
              className="text-lg group"
            >
              Join Our Mission
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
