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
      className="relative min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Blobs - Optimized pour la performance */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-600/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-blob" style={{ willChange: 'transform' }} />
      <div
        className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-indigo-500/10 rounded-full blur-[60px] md:blur-[90px] pointer-events-none animate-blob"
        style={{ animationDelay: '3s', willChange: 'transform' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600/8 rounded-full blur-[50px] md:blur-[80px] pointer-events-none animate-blob"
        style={{ animationDelay: '6s', willChange: 'transform' }}
      />

      {/* Floating tags — optimisés pour tous les écrans */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          className={`absolute hidden md:flex items-center gap-2 px-4 py-2 glass-dark rounded-full text-sm font-medium text-blue-300 border border-blue-800/40 animate-float-medium ${tag.className}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay + 1.2, duration: 0.5, ease: 'backOut' }}
          style={{ animationDelay: `${tag.delay}s`, willChange: 'transform, opacity' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {tag.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-8 px-6">
        <motion.div
          className="max-w-5xl w-full mx-auto text-center z-10 relative"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wider">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Doryann Genin · Étudiant
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 glow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Doryann étudiant en{' '}
            <br />
            <span className="text-shimmer">e-Business</span>
            <br />
            et {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
              Web Designer junior
            </span>
            .
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
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
              {/* Buttons row */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg transition-all transform hover:scale-105 cursor-pointer w-full sm:w-[220px] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.12)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center gap-2">
                    Me Contacter
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>

                <Link
                  to="experience"
                  smooth
                  duration={500}
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white border border-gray-700 hover:border-blue-400 hover:bg-blue-400/5 transition-all cursor-pointer w-full sm:w-[220px]"
                >
                  Découvrir mon profil
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  />
                </Link>
              </div>

              {/* Scroll indicator — positioned precisely relative to the button group */}
              <motion.div
                className="flex flex-col items-center gap-2 text-gray-500 mt-6"
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

      {/* Scroll indicator — bottom of flex column, never overlaps content */}

    </section>
  );
};

export default Hero;
