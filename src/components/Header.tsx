import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import GreentubeLogo from '../assets/greentube-logo.svg';

const navItems = [
  {
    label: 'Products and Services',
    children: [
      { label: 'Slot Games', href: '#' },
      { label: 'Live Casino', href: '#' },
      { label: 'Platform Solutions', href: '#' },
      { label: 'Content Integration', href: '#' },
    ],
  },
  {
    label: 'Media',
    children: [
      { label: 'News', href: '#' },
      { label: 'Press Releases', href: '#' },
      { label: 'Media Kit', href: '#' },
    ],
  },
];

const rightNavItems = [
  { label: 'Careers', href: '#' },
  { label: 'About Us', href: '#' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-20"
      onMouseEnter={() => setIsVisible(true)}
    >
      <header className={`bg-gray-800 hover:bg-gray-800 hover:backdrop-blur-sm transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="grid grid-cols-3 items-center h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center rounded-lg text-white group-hover:text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-all duration-300 hover:shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={GreentubeLogo}
              alt="Greentube Logo"
              loading="lazy"
              className="h-10 w-auto"
              style={{ fontFamily: 'Gugi, cursive' }}
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {rightNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
              >
                <a href={item.href} className="text-white rounded-lg group-hover:text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  {item.label}
                </a>
              </div>
            ))}
            
            {/* Account Avatar */}
            <button className="w-8 h-8 bg-gray-700 bg-opacity-50 group-hover:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300 hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]">
              <User className="h-4 w-4 text-white group-hover:text-gray-300" />
            </button>
          </div>

          <div className="md:hidden spacer" />
          {/* Mobile menu button */}
          <div className="md:hidden justify-self-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white group-hover:text-gray-300 hover:text-green-400 p-2 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 bg-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            {/* Left nav items */}
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <button className="flex items-center justify-between w-full text-left text-gray-300 px-3 hover:text-green-400 py-2 text-base font-medium transition-all duration-300 hover:shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  {item.label}
                </button>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block text-gray-400 hover:text-green-400 py-2 text-sm transition-all duration-300 hover:shadow-[0_0_6px_rgba(34,197,94,0.4)]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Right nav items */}
            {rightNavItems.map((item) => (
              <div key={item.label} className="py-2">
                <a href={item.href} className="block text-gray-300 hover:text-green-400 px-3 py-2 text-base font-medium transition-all duration-300 hover:shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  {item.label}
                </a>
              </div>
            ))}
            
            <div className="pt-4 items-center flex justify-center">
              <button className="w-auto flex items-center justify-center space-x-2 bg-gray-700 text-green-400 rounded-lg px-6 py-2 hover:bg-gray-600 transition-all duration-300 font-medium hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]">
                <User className="h-4 w-4" />
                <span>Account</span>
              </button>
            </div>
          </div>
        )}
      </div>
      </header>
    </div>
  );
}