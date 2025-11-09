import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Tentang Pendidikan Vokasi" },
    { path: "/interactive", label: "Media Interakif" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-purple-600 p-2 rounded-full group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white" size={24} />
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-white">Vokasi 4.0</h1>
              <p className="text-xs text-gray-400">Pendidikan Masa Depan</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full font-medium transition-all ${
                  isActive(link.path)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-full font-medium transition-all mb-2 ${
                  isActive(link.path)
                    ? "bg-purple-900/30 text-purple-400 border border-purple-500/30"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;