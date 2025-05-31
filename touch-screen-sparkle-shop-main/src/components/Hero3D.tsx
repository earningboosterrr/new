
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const RotatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.5, 1.5, 0.1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingScreen = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.8, 1, 0.02]} />
          <meshStandardMaterial 
            color="#000000" 
            emissive="#0f172a"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      <RotatingCube position={[-3, 1, 0]} />
      <FloatingScreen position={[3, -1, 0]} />
      <RotatingCube position={[0, 2, -2]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Next-Gen
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                POS Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Transform your retail experience with cutting-edge touch screen POS terminals 
              and digital signage displays. Built for the future of commerce.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side can house additional 3D elements or content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* This space is for the 3D scene to show through */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
