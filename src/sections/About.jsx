import React from 'react';
import Section from '../components/Section';
import FounderCard from '../components/FounderCard';
import { motion } from 'framer-motion';

const About = () => {
  const founders = [
    {
      name: 'Viha Bhattad',
      role: 'Founder',
      grade: '11th Grade Science Student',
      bio: 'An 11th Grade Science student with a vision beyond academics. Viha dreams of creating a society rooted in compassion. Under her leadership, the NGO has organized plantation drives, donation campaigns, and workshops. She balances studies with social service, standing as a role model for young leaders.',
    },
    {
      name: 'Aarya Shah',
      role: 'Co-Founder',
      grade: '9th Grade Student, Aspiring Lawyer',
      bio: 'A 9th-grade student with a strong sense of justice and empathy. Aspiring to be a lawyer, she believes in building a society that is fair and inclusive. Aarya plays a key role in planning and executing community projects, proving age is no barrier to passion.',
    },
    {
      name: 'Anaisha Golchha',
      role: 'Co-Founder',
      grade: '9th Grade Student, Dedicated Swimmer',
      bio: "A 9th grader and dedicated swimmer. Anaisha channels her athlete's discipline and team spirit into meaningful service. Whether it's a plantation drive or a donation program, she contributes wholeheartedly with energy and compassion.",
    },
  ];

  return (
    <Section id="about" background="light">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6"
        >
          Meet The Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-700 max-w-3xl mx-auto italic"
        >
          "Project Nurture is not just an NGO. It's a promise to care, to share, and to nurture."
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {founders.map((founder, index) => (
          <FounderCard key={founder.name} {...founder} index={index} />
        ))}
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-forest-green to-earthy-brown rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
      >
        <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          A youth-led NGO dedicated to spreading kindness and building a sustainable future through simple yet powerful acts of care. We believe in the power of young minds to create meaningful change in our communities and environment.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
