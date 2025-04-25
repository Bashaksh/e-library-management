'use client';
import { motion } from 'framer-motion';

interface BottomNavigationProps {
  items: string[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

export default function BottomNavigation({ items, activeTab, onTabClick }: BottomNavigationProps) {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-4 bg-[#1E1E2F]/80 backdrop-blur-md rounded-2xl flex space-x-8 z-10"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {items.map((item) => (
        <motion.div
          key={item}
          className={`cursor-pointer relative px-2 py-1 ${activeTab === item ? 'text-white' : 'text-gray-400'}`}
          onClick={() => onTabClick(item)}
          whileHover={{ scale: 1.05 }}
        >
          {item}
          {activeTab === item && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3A86FF] to-[#8338EC]" 
              layoutId="navIndicator"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}