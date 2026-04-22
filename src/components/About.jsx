import { motion, useInView } from 'framer-motion';
import { Code, Briefcase, Database, GitBranch, Cpu, Globe } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 2, suffix: '+', label: "Ans d'expérience web" },
  { value: 3, suffix: '+', label: 'Projets réalisés' },
  { value: 7, suffix: '', label: 'Compétences clés' },
];

const cards = [
  {
    icon: <Code size={22} />,
    title: 'HTML / CSS / JS / PHP',
    desc: 'Développement de sites vitrines complets, responsive et optimisés.',
  },
  {
    icon: <Database size={22} />,
    title: 'Base de données',
    desc: 'Formulaires reliés à MySQL via phpMyAdmin, tests et qualité du code.',
  },
  {
    icon: <GitBranch size={22} />,
    title: 'GitHub & Odoo',
    desc: "Versioning, déploiement Netlify et maîtrise de l'ERP Odoo.",
  },
  {
    icon: <Cpu size={22} />,
    title: 'IA & e-Business',
    desc: "Maîtrise d'outils IA spécifiques, stratégie digitale et vision business.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="py-28 px-6 relative bg-slate-900 border-y border-slate-800 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
            Qui suis-je ?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            À propos de <span className="text-blue-400">moi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-16 max-w-xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="border-gradient glass-dark p-4 sm:p-6 rounded-2xl text-center group hover:bg-slate-800/60 transition-colors"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1 group-hover:text-blue-300 transition-colors">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Je m'appelle{' '}
              <strong className="text-white">Doryann Genin</strong>, étudiant en{' '}
              <strong className="text-white">Bachelier e-business à l'HEPL Liège</strong> (depuis 2024),
              après un CESS en construction et travaux publics à l'Institut Pierrard de Virton.
            </p>
            <p>
              Passionné par la création de sites web, je maîtrise{' '}
              <strong className="text-white">HTML, CSS, JavaScript, PHP</strong> et les bases de données MySQL.
              J'ai aussi de l'expérience avec{' '}
              <strong className="text-white">GitHub, Odoo et des outils IA spécifiques</strong>.
            </p>
            <p>
              Mon parcours atypique — de la construction au web, en passant par la restauration —
              m'a forgé une rigueur terrain et une vision business pour concevoir des solutions digitales
              adaptées aux <strong className="text-white">indépendants et petites entreprises</strong>.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="border-gradient glass-dark p-5 rounded-2xl flex flex-col gap-3 hover:bg-slate-800/60 transition-all group cursor-default"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/25 transition-all">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white">{card.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
