import { useState, useRef, useEffect } from 'react';

const carouselImages = [
  {
    id: 1,
    src: '/gang-wars.jpg',
    title: 'Slot Games',
    description: 'Slot gaming experience'
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
    description: 'Exclusive VIP gaming'
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

  const itemWidth = screenWidth / 4;

  const handleImageClick = (image: typeof carouselImages[0]) => {
    console.log('Clicked image:', image.title);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400 bg-opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-600 bg-opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="w-full relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 text-center">
              Explore Our Gaming Portfolio
            </h2>
            <p className="text-lg text-gray-300 mb-2 text-center">
              Discover our extensive collection of gaming experiences
            </p>
            <span className="inline-block mt-2 px-4 py-1 rounded-full bg-green-500/10 text-green-400 font-semibold text-xs tracking-widest uppercase shadow-sm animate-bounce">
              New Games Added Weekly!
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-visible md:pl-4 md:pr-4">
            <div
              ref={carouselRef}
              className="flex gap-6 md:gap-8 scrollbar-hide overflow-x-auto snap-x snap-mandatory py-4"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              role="region"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
              }}
            >
              {carouselImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 cursor-pointer group transition-transform duration-300"
                  style={{
                    width: `${itemWidth}px`,
                    scrollSnapAlign: 'start',
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_32px_rgba(34,197,94,0.5)] border-2 border-transparent group-hover:border-green-400">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                      style={{ height: `${itemWidth}px` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-green-400 font-semibold text-lg mb-1 drop-shadow">
                          {image.title}
                        </h3>
                        <p className="text-gray-200 text-sm drop-shadow">
                          {image.description}
                        </p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none"></div>
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