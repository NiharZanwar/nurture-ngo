import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Impact = () => {
  const projects = [
    {
      title: 'Urban Forests',
      category: 'Environment',
      details: 'A unique initiative to build Urban Forests in the heart of Pune in collaboration with Anandvan. We transform lifeless concrete spaces into green, self-sustaining ecosystems using native tree species to make the city cleaner, cooler, and healthier.',
      quote: null,
      achievement: null,
    },
    {
      title: 'The 7-Day Donation Drive',
      category: 'Community',
      details: 'Collaborated with Goodwill India Foundation, Pune. The community came together to donate clothes, essentials, and old belongings.',
      quote: null,
      achievement: 'Featured in the local newspaper three times. Received an "Impact Certificate" for eco-conscious service.',
    },
    {
      title: 'Book Donation',
      category: 'Education',
      details: 'Donated notebooks, pens, and stationery to the kids at Balgram SOS Children\'s Village.',
      quote: 'Just like trees, young minds grow strong when nurtured with care and love.',
      achievement: null,
    },
    {
      title: 'Blanket Distribution',
      category: 'Global Reach',
      details: 'Donated blankets to factory workers in Botswana, Africa, to help them stay warm during cold early shifts.',
      quote: 'They stitch clothes with dedication every day. We stitched a little warmth into their lives.',
      achievement: null,
    },
    {
      title: 'Serving Warkaris',
      category: 'Culture',
      details: 'Served free meals, cool drinking water, and provided resting shade under newly planted trees to Warkaris walking toward Pandharpur during the Dnyaneshwar Palkhi.',
      quote: null,
      achievement: null,
    },
  ];

  return (
    <Section id="impact" background="white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6"
        >
          Our Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Every project is a step towards building a kinder, greener, and more sustainable world
        </motion.p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </Section>
  );
};

export default Impact;
