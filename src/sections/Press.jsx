import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Newspaper, Award, TrendingUp } from 'lucide-react';

const Press = () => {
  const pressItems = [
    {
      icon: Newspaper,
      title: 'Featured in Local Newspaper',
      description: 'Our 7-Day Donation Drive was featured three times in local newspapers, highlighting the community impact.',
      date: '2024',
    },
    {
      icon: Award,
      title: 'Impact Certificate',
      description: 'Received an official "Impact Certificate" from Goodwill India Foundation for eco-conscious service.',
      date: '2024',
    },
    {
      icon: TrendingUp,
      title: 'Growing Recognition',
      description: 'Recognized by local community leaders for our youth-led initiatives and sustainable approach.',
      date: 'Ongoing',
    },
  ];

  return (
    <Section background="light">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6"
        >
          In The News
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Recognition and milestones that keep us motivated
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pressItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-forest-green to-sunshine-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-sunshine-yellow mb-2 block">
                {item.date}
              </span>
              <h3 className="text-xl font-serif font-bold text-forest-green mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Placeholder for Newspaper Clippings */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12"
      >
        <h3 className="text-2xl font-serif font-bold text-forest-green text-center mb-8">
          Media Gallery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md h-64 flex items-center justify-center border-2 border-dashed border-gray-300"
            >
              <span className="text-gray-400 text-center">
                Newspaper Clipping {i}
                <br />
                <span className="text-sm">(Coming Soon)</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Press;
