import { motion } from 'framer-motion';
import { User, Code, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-slate-900 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">À propos de <span className="text-blue-400">moi</span></h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Je m'appelle <strong>Doryann Genin</strong>, j'ai 19 ans, et je suis actuellement étudiant en deuxième année de <strong>Business à l'HEPL</strong> de Liège.
            </p>
            <p>
              Passionné par la création de sites web, le web design et l'expérience utilisateur (UX/UI), j'aime transformer des idées abstraites en interfaces modernes, propres et performantes.
            </p>
            <p>
              Mon parcours hybride, mêlant un cursus orienté affaires et une passion technique, me permet de comprendre les enjeux réels d'une entreprise pour y répondre avec des solutions digitales adaptées.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="glass p-6 rounded-2xl flex flex-col gap-4 border border-blue-900/30 hover:border-blue-500/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Business</h3>
              <p className="text-sm text-gray-400">Étudiant à l'HEPL Liège, axé sur les résultats et la stratégie.</p>
            </div>
            
            <div className="glass p-6 rounded-2xl flex flex-col gap-4 border border-blue-900/30 hover:border-blue-500/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Web Design</h3>
              <p className="text-sm text-gray-400">Création d'interfaces modernes, fluides et centrées sur l'utilisateur.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
