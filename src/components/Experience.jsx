import { motion, useInView } from 'framer-motion';
import { UtensilsCrossed, Monitor, Wrench } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Développeur web junior – Projet de cours',
    date: 'HEPL · 2026',
    icon: <Monitor size={22} className="text-blue-400" />,
    description:
      "Conception d'une application web complète : structure UX, intégration HTML/CSS/PHP responsive, et formulaire de contact relié à une base de données MySQL via phpMyAdmin.",
    skills: ['HTML / CSS / PHP', 'MySQL / phpMyAdmin', 'Responsive Design', 'UX'],
    dotColor: 'bg-blue-500',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 2,
    title: 'Job étudiant – Service communal',
    date: '2024',
    icon: <Wrench size={22} className="text-emerald-400" />,
    description:
      "Soutien aux équipes techniques : petits travaux, rangement et entretien. Polyvalence, organisation et respect strict des consignes au quotidien.",
    skills: ['Organisation', 'Polyvalence', 'Travail terrain'],
    dotColor: 'bg-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: 3,
    title: 'Employé polyvalent – Restauration',
    date: '2021 – 2026',
    icon: <UtensilsCrossed size={22} className="text-gray-400" />,
    description:
      "5 ans d'expérience : préparation, mise en place, aide au service et plonge. Respect strict des normes d'hygiène et travail en équipe dans un environnement exigeant.",
    skills: ['Rigueur', "Travail d'équipe", 'Hygiène & normes', 'Résistance au stress'],
    dotColor: 'bg-slate-500',
    glowColor: 'rgba(100, 116, 139, 0.2)',
  },
];

const formations = [
  {
    degree: 'Bachelier en e-business',
    school: 'HEPL – Liège',
    period: '2024 → En cours',
    color: 'text-blue-400',
    border: 'border-blue-800/40',
    bg: 'bg-blue-900/20',
  },
  {
    degree: 'CESS – Technique de qualification',
    school: 'Institut Pierrard – Virton',
    period: '2020 – 2024',
    color: 'text-gray-400',
    border: 'border-slate-700/60',
    bg: 'bg-slate-800/30',
  },
];

const Experience = () => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 px-6 relative bg-brand-blue overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-900/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
            Mon Parcours
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-blue-400">Expériences</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Un parcours atypique qui allie savoir-être terrain et compétences techniques.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Vertical line track */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-slate-800/80 md:-translate-x-px" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-blue-400/50 to-transparent md:-translate-x-px origin-top"
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ bottom: 0 }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex gap-0 md:gap-0 ${index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-5 md:left-1/2 top-7 w-4 h-4 ${exp.dotColor} rounded-full -translate-x-[7px] md:-translate-x-2 ring-4 ring-brand-blue z-10 transition-all`}
                  style={{ boxShadow: `0 0 12px ${exp.glowColor}` }}
                />

                {/* Desktop spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="pl-14 md:pl-0 w-full md:w-1/2 md:px-10">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="border-gradient glass-dark p-6 sm:p-8 rounded-3xl relative overflow-hidden group shadow-xl"
                    style={{
                      boxShadow: `0 4px 40px ${exp.glowColor}`,
                    }}
                  >
                    {/* Glow on hover */}
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: exp.glowColor }}
                    />

                    {/* Card header */}
                    <div className="flex items-start justify-between relative z-10 mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-slate-600 transition-colors">
                        {exp.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800/80 text-gray-300 border border-slate-700">
                        {exp.date}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 mb-5 leading-relaxed text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium px-3 py-1 bg-blue-900/25 text-blue-300 rounded-lg border border-blue-800/40 hover:bg-blue-900/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
              Diplômes
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Mes <span className="text-blue-400">Formations</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {formations.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`border-gradient glass-dark p-6 rounded-2xl border ${f.border} ${f.bg}`}
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${f.color}`}>{f.period}</p>
                <h4 className="text-white font-bold text-base mb-1">{f.degree}</h4>
                <p className="text-gray-400 text-sm">{f.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
