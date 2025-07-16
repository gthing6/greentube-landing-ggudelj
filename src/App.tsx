import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <ImageCarousel />
      </div>
      <div className="snap-start">
        <Stats />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;