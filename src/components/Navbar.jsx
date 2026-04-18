import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', to: 'hero' },
  { name: 'À propos', to: 'about' },
  { name: 'Expériences', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-blue/80 backdrop-blur-xl border-b border-slate-800/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth duration={500}
          className="text-xl font-bold cursor-pointer text-white flex items-center gap-1 tracking-tight group"
        >
          <span className="group-hover:text-blue-200 transition-colors">Doryann</span>
          <span className="text-blue-400 text-2xl leading-none">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth duration={500}
              spy
              onSetActive={() => setActive(link.to)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
                active === link.to
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {active === link.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}

          <Link
            to="contact"
            smooth duration={500}
            className="ml-4 px-5 py-2.5 bg-white text-slate-950 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 cursor-pointer text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Travaillons ensemble
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1 hover:text-blue-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-brand-blue/95 backdrop-blur-xl border-b border-slate-800/60"
          >
            <div className="flex flex-col items-center py-6 gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    to={link.to}
                    smooth duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center text-gray-300 hover:text-white hover:bg-white/5 text-lg font-medium cursor-pointer py-3 rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full mt-2"
              >
                <Link
                  to="contact"
                  smooth duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-white text-slate-950 font-semibold rounded-full cursor-pointer text-sm"
                >
                  Travaillons ensemble
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
