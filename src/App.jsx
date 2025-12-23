import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Impact from './sections/Impact';
import Press from './sections/Press';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <About />
      <Impact />
      <Press />
    </Layout>
  );
}

export default App;
