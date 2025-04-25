'use client'
import { motion } from 'framer-motion';
import { Button } from "./button";
import { ChevronRight } from 'lucide-react';

interface Home_Books_sectionProps {
  activeTab: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Home_Books_section({ activeTab, onSectionClick }: Home_Books_sectionProps) {
  // Featured book details
  const featuredBook = {
    title: "LACK BOOK",
    subtitle: "BY POER",
    description: "Here. Consectetur adipiscer sollicitudin fusce tinciduntl viverra.",
    image: "/book-cover.png",
    stats: [
      { title: "Number of pages", value: "520" },
      { title: "Five-Star Reviews", value: "5K" },
      { title: "Time Spent", value: "2300K Hours" },
      { title: "Added to Fav", value: "55K " }
    ]
  };

  // Bestsellers books
  const bestsellerBooks = [
    {
      id: 1,
      title: "The Silent Echo",
      image: "/bestseller-1.png",
      description: "A gripping psychological thriller about a detective who must solve a series of mysterious disappearances in a small coastal town while confronting her own dark past.",
      icon: "circle-dollar-sign"
    },
    {
      id: 2,
      title: "Beyond the Stars",
      image: "/bestseller-2.png",
      description: "An epic science fiction adventure following humanity's first interstellar mission to colonize a distant planet, only to discover they're not alone in the universe.",
      icon: "activity"
    },
    {
      id: 3,
      title: "The Last Garden",
      image: "/bestseller-3.png",
      description: "A heartwarming tale of community, healing, and hope as a group of neighbors transform an abandoned lot into a flourishing garden during challenging times.",
      icon: "map-pin"
    },
    {
      id: 4,
      title: "Digital Dreams",
      image: "/bestseller-4.png",
      description: "A cutting-edge cyberpunk novel exploring the boundaries between human consciousness and artificial intelligence in a world where virtual reality has become the new reality.",
      icon: "play"
    }
  ];
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b overflow-y-auto overflow-x-hidden text-white">
      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Book Section */}
        <div id="Intro" className="mt-8 mb-16 bg-[#121225]/70 backdrop-blur-sm rounded-xl p-6 border border-[#2A2A3A]">
          <div className="flex items-center mb-6 space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#1E1E2F] flex items-center justify-center border border-[#2A2A3A]">
              <span className="text-[#3A86FF]">🎇</span>
            </div>
            <span className="text-sm text-gray-400">Best Seller Spotlight</span>
          </div>
          
          <div className="flex">
            {/* Book Information */}
            <div className="w-2/5 pr-8">
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-2">Here, Reader!</h3>
                <h2 className="text-xl font-bold mb-1">Readers Choice Winner For This Sesion #1</h2>
                <h2 className="text-xl font-bold mb-1">Voted #1 by a lot of book lovers!</h2>

              </div>
              
              <h3 className="text-sm font-medium text-gray-300 mb-4">You can also :</h3>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button 
                  className="rounded-md bg-[#3A86FF] text-white hover:bg-[#3A86FF]/80 text-sm py-2 px-6" 
                >
                  Read it now!
                </Button>
              </motion.div>
            </div>
            
            {/* Book Cover */}
            <div className="w-1/4 flex justify-center">
              <div className="relative w-48 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]/20 to-[#8338EC]/20 rounded-lg transform rotate-3"></div>
                <div className="relative z-10 w-full h-full bg-[#1A1A2A] rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="flex-1 bg-gradient-to-b from-[#1E1E2F] to-[#151525] p-6 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold">LACK</h2>
                      <h2 className="text-3xl font-bold">BOOK</h2>
                      <div className="mt-2 text-sm font-medium text-gray-400">BY POER</div>
                    </div>
                  </div>
                  <div className="h-16 bg-[#3A86FF]/20 flex items-center justify-end p-4">
                    <div className="w-8 h-8 bg-[#3A86FF] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book Stats */}
            <div className="w-2/5 pl-8">
              <div className="flex justify-between items-start">
                <div className="space-y-6 flex-1">
                  {featuredBook.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-[#2A2A3A] pb-2">
                      <span className="text-sm text-gray-400">{stat.title}</span>
                      {stat.value && (
                        <span className="text-lg font-semibold">{stat.value}</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 flex items-center justify-center bg-[#1E1E2F] rounded-full cursor-pointer border border-[#2A2A3A]"
                  >
                    <ChevronRight size={16} className="text-[#3A86FF]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Book Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-10">
            <Button 
              variant="outline" 
              className="rounded-md border-[#2A2A3A] text-white hover:bg-[#3A86FF] text-xs px-4"
            >
              Best Seller
            </Button>
            <Button 
              variant="outline" 
              className="rounded-md border-[#2A2A3A] text-white hover:bg-[#3A86FF] text-xs px-4"
            >
              New Arrival
            </Button>
            <Button 
              variant="outline" 
              className="rounded-md border-[#2A2A3A] text-white hover:bg-[#3A86FF] text-xs px-4"
            >
              Award Winning
            </Button>
            <Button 
              variant="outline" 
              className="rounded-md border-[#2A2A3A] text-white hover:bg-[#3A86FF] text-xs px-4"
            >
             Fan Favorite
            </Button>
          </div>
        </div>
        
        {/* Bestsellers Section */}
        <div id="Best seller" className="mb-24">
          <div className="grid grid-cols-4 gap-6">
            {bestsellerBooks.map((book) => (
              <div 
                key={book.id} 
                className="bg-[#121225]/70 backdrop-blur-sm rounded-xl p-4 border border-[#2A2A3A] group hover:border-[#3A86FF]/50 transition-all duration-300"
              >
                <div className="relative w-full h-40 mb-4 bg-[#1A1A2A] rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-[#1E1E2F] rounded-full z-10 border border-[#2A2A3A]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#3A86FF]"></div>
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {book.id === 1 && (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1E1E2F] flex items-center justify-center border border-[#2A2A3A]">
                          <span className="text-[#3A86FF]">$</span>
                        </div>
                      </div>
                    )}
                    {book.id === 2 && (
                      <div className="text-center">
                        <div className="mx-auto mb-2">
                          <span className="bg-[#1E1E2F] text-xs px-2 py-1 rounded-md text-white">PREMIUM</span>
                        </div>
                      </div>
                    )}
                    {book.id === 3 && (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1E1E2F] flex items-center justify-center border border-[#2A2A3A]">
                          <span className="text-[#3A86FF]">📍</span>
                        </div>
                      </div>
                    )}
                    {book.id === 4 && (
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
                <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-3">{book.description}</p>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}