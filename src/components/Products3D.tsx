
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

const POSTerminal = ({ isActive }: { isActive: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && isActive) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Base */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[1, 1.2, 0.3, 16]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[1.8, 1.3, 0.02]} />
          <meshStandardMaterial 
            color="#000000" 
            emissive="#3b82f6"
            emissiveIntensity={isActive ? 0.3 : 0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const DigitalSignage = ({ isActive }: { isActive: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && isActive) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Screen Frame */}
        <mesh>
          <boxGeometry args={[3, 2, 0.2]} />
          <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Display */}
        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[2.8, 1.8, 0.02]} />
          <meshStandardMaterial 
            color="#000000" 
            emissive="#8b5cf6"
            emissiveIntensity={isActive ? 0.4 : 0.1}
          />
        </mesh>
        
        {/* Stand */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
          <meshStandardMaterial color="#6b7280" />
        </mesh>
        
        {/* Base */}
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 16]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
      </group>
    </Float>
  );
};

const ProductScene = ({ activeProduct }: { activeProduct: number }) => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <Environment preset="studio" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, 0, -10]} intensity={0.5} color="#3b82f6" />
      
      {activeProduct === 0 && <POSTerminal isActive={true} />}
      {activeProduct === 1 && <DigitalSignage isActive={true} />}
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

const Products3D = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      title: "Touch Screen POS Terminal",
      description: "Advanced point-of-sale system with multi-touch display, built-in printer, and cloud connectivity.",
      features: ["15.6\" Capacitive Touch", "Intel i5 Processor", "Built-in Receipt Printer", "EMV Card Reader"],
      price: "Starting at $899"
    },
    {
      title: "Digital Signage Display",
      description: "High-resolution displays for advertising and information in retail environments and shopping malls.",
      features: ["4K Ultra HD Display", "Android Media Player", "Remote Content Management", "24/7 Operation"],
      price: "Starting at $1,299"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge hardware solutions designed for modern retail environments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Product Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-96 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-800 dark:to-blue-900 rounded-2xl overflow-hidden"
          >
            <ProductScene activeProduct={activeProduct} />
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Product Selector */}
            <div className="flex space-x-4 mb-8">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveProduct(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeProduct === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  Product {index + 1}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {products[activeProduct].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {products[activeProduct].description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {products[activeProduct].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {products[activeProduct].price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products3D;
