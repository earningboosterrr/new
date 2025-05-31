
import React from 'react';
import { Monitor, CreditCard, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Modern
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> POS </span>
            Terminals
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your retail business with our cutting-edge touch screen POS terminals. 
            Fast, reliable, and designed for modern commerce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get Quote Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              View Products
            </Button>
          </div>

          {/* Feature icons */}
          <div className="flex justify-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center text-white animate-bounce animation-delay-1000">
              <Monitor className="w-12 h-12 mb-2" />
              <span className="text-sm">Touch Screen</span>
            </div>
            <div className="flex flex-col items-center text-white animate-bounce animation-delay-2000">
              <CreditCard className="w-12 h-12 mb-2" />
              <span className="text-sm">Card Payment</span>
            </div>
            <div className="flex flex-col items-center text-white animate-bounce animation-delay-3000">
              <ShoppingCart className="w-12 h-12 mb-2" />
              <span className="text-sm">Retail Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
