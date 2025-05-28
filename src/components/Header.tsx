import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Sparkles className="text-primary-500 mr-2" size={28} />
          <span className="text-xl font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Radiance AI
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/assessment" label="Skin Check" isActive={location.pathname === '/assessment'} />
          <NavLink to="/about" label="About Us" isActive={location.pathname === '/about'} />
          <Link to="/assessment" className="btn-primary text-sm py-2">
            Start Free AI Skin Check
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/assessment" label="Skin Check" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
            <Link 
              to="/assessment" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free AI Skin Check
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`font-medium transition-all duration-200 hover:text-primary-500 ${
        isActive ? 'text-primary-500' : 'text-neutral-700'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => {
  return (
    <Link 
      to={to} 
      className="text-neutral-700 font-medium py-2 hover:text-primary-500 transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;