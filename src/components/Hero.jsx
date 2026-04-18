import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background abstract decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wider mb-6">
            Doryann Genin : Étudiant & Designer
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          L'alliance du <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Business</span> et du <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Web Design</span>.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Je crée des expériences numériques modernes et épurées. Alliant ma rigueur issue de la restauration et ma vision business, je conçois des sites web qui marquent les esprits.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
          >
            Me Contacter <ArrowRight size={20} />
          </Link>
          
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white border border-gray-600 hover:border-white hover:bg-white/5 transition-all cursor-pointer w-full sm:w-auto"
          >
            Découvrir mon profil
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
