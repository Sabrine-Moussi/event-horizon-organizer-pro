
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  
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

  const handleLogout = () => {
    logout();
    navigate("/");
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
            {isAdmin && (
              <Link to="/admin" className="px-3 py-2 rounded-md text-gray-700 hover:text-event-blue">
                Admin
              </Link>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile" className="flex items-center w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Mon profil</span>
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem>
                      <Link to="/admin" className="flex items-center w-full">
                        <span>Administration</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => navigate("/auth")} className="event-btn event-btn-primary">
                Connexion
              </Button>
            )}
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
            {isAdmin && (
              <Link
                to="/admin"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue"
                onClick={toggleMenu}
              >
                Admin
              </Link>
            )}
            <div className="pt-2">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <Link to="/profile" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-event-light-blue">
                    <User className="inline-block mr-2 h-4 w-4" />
                    <span>Mon profil</span>
                  </Link>
                  <Button 
                    onClick={handleLogout} 
                    variant="destructive" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => {
                    navigate("/auth");
                    toggleMenu();
                  }} 
                  className="w-full event-btn event-btn-primary"
                >
                  Connexion
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
