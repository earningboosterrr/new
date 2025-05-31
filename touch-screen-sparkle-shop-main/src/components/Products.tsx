
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      name: "POS Pro 15\"",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      price: "Starting at $899",
      features: ["15\" Capacitive Touch", "Intel i5 Processor", "8GB RAM", "256GB SSD", "Built-in Printer"],
      badge: "Best Seller"
    },
    {
      name: "POS Compact 12\"",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      price: "Starting at $599",
      features: ["12\" Multi-touch Display", "ARM Processor", "4GB RAM", "128GB Storage", "Compact Design"],
      badge: "Budget Friendly"
    },
    {
      name: "POS Enterprise 17\"",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      price: "Starting at $1,299",
      features: ["17\" 4K Display", "Intel i7 Processor", "16GB RAM", "512GB SSD", "Advanced Features"],
      badge: "Premium"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact solutions for small businesses to enterprise-grade terminals for large retailers,
            we have the perfect POS system for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                >
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
