import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const floatingTags = [
  { label: 'React', delay: 0, className: 'left-8 xl:left-16 top-1/3' },
  { label: 'UI/UX Design', delay: 0.4, className: 'right-8 xl:right-16 top-1/3' },
  { label: 'Tailwind CSS', delay: 0.8, className: 'left-8 xl:left-16 bottom-1/3' },
  { label: 'Web Design', delay: 1.2, className: 'right-8 xl:right-16 bottom-1/3' },
];

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none animate-blob" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none animate-blob"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none animate-blob"
        style={{ animationDelay: '6s' }}
      />

      {/* Floating tags — xl+ only, CSS float animation via keyframe class */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          className={`absolute hidden xl:flex items-center gap-2 px-4 py-2 glass-dark rounded-full text-sm font-medium text-blue-300 border border-blue-800/40 animate-float-medium ${tag.className}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay + 1.2, duration: 0.5, ease: 'backOut' }}
          style={{ animationDelay: `${tag.delay}s` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {tag.label}
        </motion.div>
      ))}

      {/* Main content — flex-1 centres vertically, pt-20 clears navbar */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-8 px-6">
        <motion.div
          style={{ y, opacity }}
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
            Je crée des expériences numériques modernes et épurées. Alliant ma rigueur issue de la
            restauration et ma vision business, je conçois des sites web qui marquent les esprits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="contact"
              smooth
              duration={500}
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg transition-all transform hover:scale-105 cursor-pointer w-full sm:w-auto overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.12)]"
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
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white border border-gray-700 hover:border-blue-400 hover:bg-blue-400/5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Découvrir mon profil
              <ArrowRight
                size={18}
                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom of flex column, never overlaps content */}
      <motion.div
        className="flex flex-col items-center gap-2 text-gray-600 pb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
