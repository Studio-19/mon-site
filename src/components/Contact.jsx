import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Prêt à démarrer ?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Parlons de votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              projet
            </span>
            .
          </h2>
          <p className="text-gray-400 text-lg">
            Je suis toujours ouvert aux nouvelles opportunités professionnelles,
            aux projets web et aux échanges stimulants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <a
            href="mailto:doryann.pro@gmail.com"
            className="group glass px-8 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-800 transition-all cursor-pointer border border-slate-800 hover:border-blue-500/50 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Mail className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-white font-medium">Me contacter par Email</span>
            <ArrowRight
              size={16}
              className="text-gray-500 group-hover:text-white transition-colors ml-auto sm:ml-0"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/doryann-genin-479a54392/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass px-8 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-800 transition-all cursor-pointer border border-slate-800 hover:border-blue-500/50 w-full sm:w-auto justify-center sm:justify-start"
          >
            <ExternalLink className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-white font-medium">Mon Profil LinkedIn</span>
            <ArrowRight
              size={16}
              className="text-gray-500 group-hover:text-white transition-colors ml-auto sm:ml-0"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Doryann Genin. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:doryann.pro@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/doryann-genin-479a54392/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;