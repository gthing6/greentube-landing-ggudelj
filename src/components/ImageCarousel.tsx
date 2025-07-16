import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    id: 1,
    src: '/gang-wars.jpg',
    title: 'Slot Games',
    description: 'Premium slot gaming experience'
  },
  {
    id: 2,
    src: '/little-cluckers.jpg',
    title: 'Live Casino',
    description: 'Real-time casino action'
  },
  {
    id: 3,
    src: '/trinity-treasures.jpg',
    title: 'Table Games',
    description: 'Classic casino table games'
  },
  {
    id: 4,
    src: '/gang-wars.jpg',
    title: 'Slot Games',
    description: 'Premium slot gaming experience'
  },
  {
    id: 5,
    src: '/little-cluckers.jpg',
    title: 'Live Casino',
    description: 'Real-time casino action'
  },
  {
    id: 6,
    src: '/trinity-treasures.jpg',
    title: 'Table Games',
    description: 'Classic casino table games'
  },
  {
    id: 7,
    src: '/gang-wars.jpg',
    title: 'Mobile Gaming',
    description: 'Gaming on the go'
  },
  {
    id: 8,
    src: '/trinity-treasures.jpg',
    title: 'Tournaments',
    description: 'Competitive gaming events'
  },
  {
    id: 9,
    src: '/little-cluckers.jpg',
    title: 'VIP Experience',
    description: 'Exclusive premium gaming'
  },
  {
    id: 10,
    src: '/gang-wars.jpg',
    title: 'Jackpots',
    description: 'Progressive jackpot games'
  },
  {
    id: 11,
    src: '/little-cluckers.jpg',
    title: 'Sports Betting',
    description: 'Live sports wagering'
  }
];

export default function ImageCarousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemWidth = screenWidth / 4; // Each item takes 1/4 of screen width

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= carouselImages.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleImageClick = (image: typeof carouselImages[0]) => {
    console.log('Clicked image:', image.title);
    // Add your click handler logic here
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="w-full">
        <div className="text-center mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Gaming Portfolio
          </h2>
          <p className="text-lg text-gray-300">
            Discover our extensive collection of premium gaming experiences
          </p>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden md:pl-4 md:pr-4">
            <div
              ref={carouselRef}
              className="flex gap-4 md:gap-4 scrollbar-hide overflow-x-auto"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              tabIndex={0}
              role="region"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
              }}
            >

              {carouselImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{
                    width: `${itemWidth}px`,
                    scrollSnapAlign: 'start',
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                      style={{ height: `${itemWidth}px` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}