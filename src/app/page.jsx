// pages/index.tsx
'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams, SparklesCore } from "../components/ui/aceternity";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { LampDemo } from '../components/ui/aceternity/lamp';
import Home_Books_section from '../components/ui/Home_Books_section';
import BottomNavigation from '../components/ui/bottom-navigation';

export default function HomePage() {  
  // Navigation state for book sections
  const [activeSectionTab, setActiveSectionTab] = useState('Intro');
    
  // Navigation items for book sections
  const sectionNavItems = ['Intro', 'Best seller'];

  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionTab(sectionId);
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('Intro');
      const bestSellerSection = document.getElementById('Best seller');
      
      if (introSection && bestSellerSection) {
        const introRect = introSection.getBoundingClientRect();
        const bestSellerRect = bestSellerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of each section is visible in the viewport
        const introVisiblePercentage = calculateVisiblePercentage(introRect, windowHeight);
        const bestSellerVisiblePercentage = calculateVisiblePercentage(bestSellerRect, windowHeight);
        
        // Set active tab based on which section has more visibility
        if (introVisiblePercentage > bestSellerVisiblePercentage) {
          setActiveSectionTab('Intro');
        } else if (bestSellerVisiblePercentage > 0) {
          setActiveSectionTab('Best seller');
        }
      }
    };
    
    // Helper function to calculate what percentage of an element is visible
    const calculateVisiblePercentage = (rect, windowHeight) => {
      // If element is not in viewport at all
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return 0;
      }
      
      // Calculate visible height
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = visibleBottom - visibleTop;
      
      // Return percentage of element that's visible
      return (visibleHeight / rect.height) * 100;
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#101018] to-[#1E1E2F] overflow-hidden text-white">
      <Head>
        <title>Explore Our Unique Books</title>
        <meta name="description" content="Modern design with Aceternity UI" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <BackgroundBeams className="opacity-40" />
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleColor="#8338EC"
            className="w-full h-full opacity-40"
            particleDensity={30}
          />
        </div>
      </div>

      {/* Main Content Container (HeroSection) */}
      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-8">
            <span className="text-lg font-bold font-sora">Creator</span>
            <span className="text-lg font-sora text-gray-400">Hot list</span>
            <span className="text-lg font-sora text-gray-400">Publications</span>
          </div>
          
          <div className="flex items-center rounded-lg bg-[#1E1E2F]/80 backdrop-blur-sm p-1">
            <Input 
              type="text" 
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 text-white w-64" 
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Discover Ease</span>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </motion.div>
          </div>
        </div>
        
        {/* Main Hero Section */}
        <div id="Intro" className="flex flex-col items-center justify-end min-h-[500px] text-center">
          <motion.h1 
            className="text-7xl font-bold mb-2 font-space-grotesk tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Explore</span>
            {/* <span className="relative">
              n<span className="absolute -top-3 left-4 w-4 h-4 bg-[#3A86FF] rounded-sm"></span>ce
            </span> */}
          </motion.h1>
          
          <motion.h2
            className="text-7xl font-bold mb-16 font-space-grotesk tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Unique Books
          </motion.h2>
          
          <div className="flex space-x-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-blue-600 text-white hover:bg-[#3A86FF]/60"
              >
                Creator Studio
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="rounded-full bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white border-0" 
                size="lg"
              >
                Stretch for
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-blue-600 text-white hover:bg-[#3A86FF]/60"
              >
                Market Fest
              </Button>
            </motion.div>
          </div>
          
          <div className="flex items-center space-x-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <LampDemo />

      <Home_Books_section activeTab={activeSectionTab} onSectionClick={scrollToSection} />
      
      {/* Bottom Navigation for Book Sections */}
      <BottomNavigation 
        items={sectionNavItems}
        activeTab={activeSectionTab}
        onTabClick={scrollToSection}
      />
    </div>
  );
}