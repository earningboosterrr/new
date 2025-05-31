
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Circle, CircleArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Monitor,
      title: "Retail Stores",
      description: "Complete POS solutions for small to large retail chains with inventory management and sales analytics.",
      features: ["Multi-location sync", "Inventory tracking", "Customer analytics", "Employee management"]
    },
    {
      icon: Smartphone,
      title: "Shopping Malls",
      description: "Digital signage networks for advertising, wayfinding, and customer engagement throughout the mall.",
      features: ["Centralized control", "Dynamic content", "Interactive maps", "Real-time updates"]
    },
    {
      icon: Circle,
      title: "Restaurants",
      description: "Specialized POS systems for food service with kitchen display systems and order management.",
      features: ["Kitchen integration", "Table management", "Order tracking", "Payment processing"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored technology solutions for different business environments and use cases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <CircleArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
