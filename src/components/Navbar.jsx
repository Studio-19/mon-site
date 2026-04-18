import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', to: 'hero' },
    { name: 'À propos', to: 'about' },
    { name: 'Expériences', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-white flex items-center gap-2 tracking-tighter"
        >
          Doryann<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-5 py-2.5 bg-white text-slate-950 font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 cursor-pointer text-sm"
          >
            Travaillons ensemble
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white text-lg font-medium cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
