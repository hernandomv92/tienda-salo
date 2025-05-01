import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag as Shopping, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Apply scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-pink-400">Magic</span>Store
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/category/pulseras"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-pink-500' : 'text-black hover:text-pink-400'} transition-colors`
            }
          >
            Pulseras
          </NavLink>
          <NavLink
            to="/category/collares"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-pink-500' : 'text-black hover:text-pink-400'} transition-colors`
            }
          >
            Collares
          </NavLink>
          <NavLink
            to="/category/anillos"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-pink-500' : 'text-black hover:text-pink-400'} transition-colors`
            }
          >
            Anillos
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/cart" 
            className="relative text-black hover:text-pink-500 transition-colors"
            aria-label="Carrito de compras"
          >
            <Shopping size={24} />
            {itemCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </div>
            )}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black hover:text-pink-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;