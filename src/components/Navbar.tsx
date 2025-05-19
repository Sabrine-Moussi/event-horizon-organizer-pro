
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-event-blue">Event<span className="text-event-pink">Pro</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
              Accueil
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
              À propos
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue flex items-center">
                Événements <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/events/corporate" className="block px-4 py-2 text-gray-700 hover:bg-event-light-blue">
                  Entreprises
                </Link>
                <Link to="/events/wedding" className="block px-4 py-2 text-gray-700 hover:bg-event-light-blue">
                  Mariages
                </Link>
                <Link to="/events/birthday" className="block px-4 py-2 text-gray-700 hover:bg-event-light-blue">
                  Anniversaires
                </Link>
              </div>
            </div>
            <Link to="/services" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
              Services
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
              Contact
            </Link>
            <Link to="/admin" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
              Admin
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button className="event-btn event-btn-primary">
              Réservez maintenant
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-event-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300`}
        >
          <div className="pt-4 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <div className="block px-3 py-2 rounded-md text-gray-700">
              Événements
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/events/corporate"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:bg-event-light-blue"
                  onClick={toggleMenu}
                >
                  Entreprises
                </Link>
                <Link
                  to="/events/wedding"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:bg-event-light-blue"
                  onClick={toggleMenu}
                >
                  Mariages
                </Link>
                <Link
                  to="/events/birthday"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:bg-event-light-blue"
                  onClick={toggleMenu}
                >
                  Anniversaires
                </Link>
              </div>
            </div>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
              onClick={toggleMenu}
            >
              Admin
            </Link>
            <div className="pt-2">
              <Button className="w-full event-btn event-btn-primary">
                Réservez maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
