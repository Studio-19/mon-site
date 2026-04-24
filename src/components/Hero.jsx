import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const floatingTags = [
  { label: 'HTML / CSS / JS', delay: 0, className: 'left-4 md:left-8 xl:left-16 top-1/3' },
  { label: 'PHP / MySQL', delay: 0.4, className: 'right-4 md:right-8 xl:right-16 top-1/3' },
  { label: 'GitHub', delay: 0.8, className: 'left-4 md:left-8 xl:left-16 bottom-1/3' },
  { label: 'Web Design', delay: 1.2, className: 'right-4 md:right-8 xl:right-16 bottom-1/3' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/40 dark:to-slate-900"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Floating tags */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          className={`absolute hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-slate-700/60 shadow-sm ${tag.className}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay + 1.2, duration: 0.5, ease: 'backOut' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          {tag.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-8 px-6">
        <motion.div className="max-w-5xl w-full mx-auto text-center z-10 relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-300/60 dark:border-blue-700/60 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wider">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
              Doryann Genin · Étudiant
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-5 glow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Doryann bachelier en{' '}
            <br />
            <span className="text-shimmer">e-Business</span>
            <br />
            et{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-blue-500 dark:from-white dark:via-blue-300 dark:to-blue-400">
              Web Designer junior
            </span>
            .
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Je crée des sites vitrines modernes en HTML/CSS/JS/PHP. Passionné par le web design,
            je joins ma rigueur terrain à une vision e-business pour livrer des solutions digitales qui convertissent.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex flex-col items-center relative">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 cursor-pointer w-full sm:w-[220px] overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.15)] dark:shadow-[0_4px_24px_rgba(37,99,235,0.3)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-blue-700 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-2">
                    Me Contacter
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>

                <Link
                  to="experience"
                  smooth
                  duration={500}
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all cursor-pointer w-full sm:w-[240px] whitespace-nowrap"
                >
                  Découvrir mon profil
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  />
                </Link>
              </div>

              {/* Scroll indicator */}
              <motion.div
                className="flex flex-col items-center gap-2 text-gray-400 dark:text-slate-600 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <span className="text-xs tracking-[0.2em] uppercase font-medium">SCROLL</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
