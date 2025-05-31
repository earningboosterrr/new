
import React from 'react';
import { Zap, Shield, Users, BarChart3, Wifi, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions in seconds with our high-performance hardware and optimized software."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade security with encrypted transactions and PCI compliance for peace of mind."
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive touch interface that requires minimal training for your staff to master."
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Built-in reporting and analytics to track sales, inventory, and business performance."
    },
    {
      icon: Wifi,
      title: "Cloud Connected",
      description: "Seamless cloud integration for real-time data sync and remote management capabilities."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your business running smoothly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our POS Terminals?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for retail environments, our terminals combine cutting-edge technology 
            with practical functionality to boost your business efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
