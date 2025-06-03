'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ComingSoon = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Store the current ref value in a variable
    const mountNode = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode?.appendChild(renderer.domElement);
    
    // Create a 3D cube with XP Lab colors
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true,
      opacity: 0.8
    });
    
    const cube = new THREE.LineSegments(edges, lineMaterial);
    scene.add(cube);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.z = 5;
    
    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Rotate the cube
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountNode && renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-[#1a0b2e] to-[#2a0b3a] text-white">
      {/* 3D Cube Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full opacity-70"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          XP-L4B
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sito in Costruzione
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Stiamo lavorando per offrirti un&apos;esperienza straordinaria.<br />
          Torna presto a trovarci!
        </p>
        <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-semibold text-lg shadow-lg transform transition-transform hover:scale-105">
          Prossimamente
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
