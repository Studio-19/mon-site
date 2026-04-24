import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', to: 'hero' },
  { name: 'À propos', to: 'about' },
  { name: 'Expériences', to: 'experience' },
  { name: 'Formations', to: 'formations' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ isDark, onToggleTheme }) => {
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
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/70 dark:border-slate-800 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth duration={500}
          className="text-xl font-bold cursor-pointer text-slate-900 dark:text-white flex items-center gap-1 tracking-tight group"
        >
          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Doryann</span>
          <span className="text-blue-600 dark:text-blue-400 text-2xl leading-none">.</span>
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
                  ? 'text-slate-900 dark:text-white'
                  : 'text-gray-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              {active === link.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 rounded-full border border-blue-200/60 dark:border-blue-700/60"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="ml-2 p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Basculer le thème"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="contact"
            smooth duration={500}
            className="ml-2 px-5 py-2.5 bg-slate-900 dark:bg-blue-600 text-white font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-blue-500 transition-all transform hover:scale-105 cursor-pointer text-sm shadow-sm"
          >
            Travaillons ensemble
          </Link>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Basculer le thème"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="text-slate-900 dark:text-white p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/98 dark:bg-slate-900/98 border-b border-gray-200/60 dark:border-slate-800"
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
                    className="block w-full text-center text-gray-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800 text-lg font-medium cursor-pointer py-3 rounded-xl transition-all"
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
                  className="block w-full text-center px-5 py-3 bg-slate-900 dark:bg-blue-600 text-white font-semibold rounded-full cursor-pointer text-sm"
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
