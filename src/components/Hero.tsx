import React from 'react';
import { PlayIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="relative">
              Real Slot Gaming
            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-400 opacity-30 -z-10"></span>
            </span>
            <br />
            <span className="text-green-600">Experience</span>
          </h1>
          
         {/* Cards */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <PlayIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Gaming Innovation</h3>
                </div>
                <p className="text-gray-300">
                  Leading the industry with cutting-edge gaming technology and immersive player experiences that set new standards.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <PlayIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Global Reach</h3>
                </div>
                <p className="text-gray-300">
                  Trusted by operators worldwide, delivering gaming solutions across multiple markets and platforms.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <PlayIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Premium Content</h3>
                </div>
                <p className="text-gray-300">
                  Award-winning slot games and casino content designed to captivate players and drive engagement.
                </p>
              </div>

              {/* Card 4 slot-game-1 
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-yellow-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group relative flex items-center justify-center min-h-[120px]">
                <div className="flex items-center justify-center w-full h-full">
                  <img src="/gang-wars.jpg" alt="Slot Game 1" className="w-full h-full object-cover rounded-xl" loading="lazy"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-yellow-400 text-xl font-bold mb-2">Slot Game 1</h4>
                  <p className="text-gray-200 text-sm">Fun slot game</p>
                </div>
              </div>

              Card 4 slot-game-2 
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-yellow-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group relative flex items-center justify-center min-h-[120px]">
                <div className="flex items-center justify-center w-full h-full">
                  <img src="/little-cluckers.jpg" alt="Slot Game 2" className="w-full h-full object-cover rounded-xl" loading="lazy"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-yellow-400 text-xl font-bold mb-2">Slot Game 2</h4>
                  <p className="text-gray-200 text-sm">Fun slot game</p>
                </div>
              </div>

              Card 4 slot-game-3 
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-yellow-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group relative flex items-center justify-center min-h-[120px]">
                <div className="flex items-center justify-center w-full h-full">
                  <img src="/trinity-treasures.jpg" alt="Slot Game 3" className="w-full h-full object-cover rounded-xl" loading="lazy"/>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-yellow-400 text-xl font-bold mb-2">Slot Game 3</h4>
                  <p className="text-gray-200 text-sm">Fun slot game</p>
                </div>
              </div>
              */}
            </div>
          </div> 

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="primary-button text-white px-8 py-3 rounded-full hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 font-medium">
              Get Started
            </button>
            <button className="secondary-button border-gradient flex items-center justify-center border-2 text-green-600 px-8 py-3 rounded-full hover:transform hover:-translate-y-1 transition-all duration-300 font-medium">
              <PlayIcon className="mr-2 h-5 w-5" />
              Get Started 2
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl text-green-600 font-semibold mb-2">Innovative Games</h3>
              <p className="text-gray-300">
                Cutting-edge gaming experiences designed to captivate and engage players worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl text-green-600 font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-300">
                State-of-the-art platform built with performance, security, and scalability in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl text-green-600 font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-300">
                Industry-recognized excellence in gaming innovation and player satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}