
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white">
      <div className="fixed inset-0 bg-[url('https://uploads-ssl.webflow.com/61defeda4bea10d0fec68659/61f0e6283a539661c76a4b77_noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
