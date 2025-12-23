import React from 'react';
import { Heart, Sparkles, Target, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Donation',
      description: 'Giving back to those in need through meaningful contributions that make a real difference in lives.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Sparkles,
      title: 'Dedication',
      description: 'Committed to our cause with unwavering focus and consistent effort towards building a better future.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Determination',
      description: 'Overcoming challenges with resilience and persistence to achieve our environmental and social goals.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Flame,
      title: 'Devotion',
      description: 'Passionate about creating positive change, driven by love for our planet and communities.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          The Four Ds that drive our mission and inspire every action we take
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-forest-green">
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-green mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
