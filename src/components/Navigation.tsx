'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMessages } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const messages = useMessages();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navigation = [
    { name: messages['Home'] || 'Home', href: '/' },
    { name: messages['HavenOS'] || 'HavenOS', href: '/havenos' },
    { name: messages['DockOS'] || 'DockOS', href: '/dockos' },
    { name: messages['Technology'] || 'Technology', href: '/technology' },
    { name: messages['About'] || 'About', href: '/about' },
    { name: messages['Contact'] || 'Contact', href: '/contact' },
    { name: messages['Careers'] || 'Careers', href: '/developers' },
  ];

  return (
    <nav className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-xl border-b border-blue-700/30 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/vendoora_logo.png" 
                alt="Vendoora Logo" 
                width={40} 
                height={40}
                className="hover:scale-110 transition-transform duration-200"
              />
              <span className="text-xl font-bold text-white tracking-wide hover:text-blue-200 transition-colors duration-200">
                {messages['Vendoora'] || 'Vendoora'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-blue-100 hover:text-white hover:bg-blue-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-6 pl-6 border-l border-blue-600">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/95 backdrop-blur-sm border-t border-blue-700/30">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-blue-100 hover:text-white hover:bg-blue-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
