import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    href: 'mailto:doryann.pro@gmail.com',
    icon: <Mail size={20} className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" />,
    label: 'Me contacter par Email',
    sub: 'doryann.pro@gmail.com',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/doryann-genin-479a54392/',
    icon: <ExternalLink size={20} className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" />,
    label: 'Mon Profil LinkedIn',
    sub: 'Doryann Genin',
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/15 rounded-full blur-[200px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wider mb-6"
          >
            <Sparkles size={14} />
            Prêt à démarrer ?
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Parlons de votre{' '}
            <span className="text-shimmer">projet</span>
            .
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Je suis toujours ouvert aux nouvelles opportunités professionnelles,
            aux projets web et aux échanges stimulants.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group border-gradient glass-dark px-7 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-800/70 transition-all cursor-pointer w-full sm:w-auto justify-between sm:justify-start"
              style={{ boxShadow: '0 4px 40px rgba(59,130,246,0.08)' }}
            >
              {link.icon}
              <div className="flex-1 text-left">
                <div className="text-white font-semibold text-sm">{link.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{link.sub}</div>
              </div>
              <ArrowRight
                size={16}
                className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 shrink-0"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
        >
          <p>© {new Date().getFullYear()} Doryann Genin. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:doryann.pro@gmail.com"
              className="hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/doryann-genin-479a54392/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
