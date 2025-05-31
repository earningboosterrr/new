
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero3D from '../components/Hero3D';
import Products3D from '../components/Products3D';
import Solutions from '../components/Solutions';
import Contact3D from '../components/Contact3D';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Hero3D />
        <Products3D />
        <Solutions />
        <Contact3D />
      </div>
    </ThemeProvider>
  );
};

export default Index;
