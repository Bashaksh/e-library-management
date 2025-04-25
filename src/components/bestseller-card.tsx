// components/bestseller-card.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type IconType = 'circle-dollar-sign' | 'activity' | 'map-pin' | 'play';

interface BestsellerCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  icon: string;
}

export const BestsellerCard: FC<BestsellerCardProps> = ({ 
  id, 
  title, 
  image, 
  description,
  icon
}) => {
  return (
    <div className="bg-[#121225]/70 backdrop-blur-sm rounded-xl p-4 border border-[#2A2A3A] group hover:border-[#3A86FF]/50 transition-all duration-300">
      <div className="relative w-full h-40 mb-4 bg-[#1A1A2A] rounded-lg overflow-hidden">
        <motion.div
          className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-[#1E1E2F] rounded-full z-10 border border-[#2A2A3A]"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-4 h-4 rounded-full bg-[#3A86FF]"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          {id === 1 && (
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1E1E2F] flex items-center justify-center border border-[#2A2A3A]">
                <span className="text-[#3A86FF]">$</span>
              </div>
            </div>
          )}
          {id === 2 && (
            <div className="text-center">
              <div className="mx-auto mb-2">
                <span className="bg-[#1E1E2F] text-xs px-2 py-1 rounded-md text-white">PREMIUM</span>
              </div>
            </div>
          )}
          {id === 3 && (
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1E1E2F] flex items-center justify-center border border-[#2A2A3A]">
                <span className="text-[#3A86FF]">📍</span>
              </div>
            </div>
          )}
          {id === 4 && (
            <div className="text-center">
              <div className="relative w-28 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-r from-red-600 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MOVIE CARS</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs text-gray-400 line-clamp-3">{description}</p>
      
      <div className="mt-4 pt-4 border-t border-[#2A2A3A] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-[#3A86FF] rounded-full"></div>
          <div className="w-2 h-2 bg-[#3A86FF]/60 rounded-full"></div>
          <div className="w-2 h-2 bg-[#3A86FF]/30 rounded-full"></div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-6 h-6 flex items-center justify-center bg-[#1E1E2F] rounded-full cursor-pointer border border-[#2A2A3A] group-hover:bg-[#3A86FF] group-hover:border-[#3A86FF]"
        >
          <ChevronRight size={12} className="text-[#3A86FF] group-hover:text-white" />
        </motion.div>
      </div>
    </div>
  );
};