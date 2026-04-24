import { motion, useInView } from 'framer-motion';
import { UtensilsCrossed, Monitor, Wrench } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Développeur web junior – Projet de cours',
    date: 'HEPL · 2026',
    icon: <Monitor size={22} className="text-blue-600 dark:text-blue-400" />,
    description:
      "Conception d'une application web complète : structure UX, intégration HTML/CSS/PHP responsive, et formulaire de contact relié à une base de données MySQL via phpMyAdmin.",
    skills: ['HTML / CSS / PHP', 'MySQL / phpMyAdmin', 'Responsive Design', 'UX'],
    dotColor: 'bg-blue-500',
    glowColor: 'rgba(37, 99, 235, 0.12)',
  },
  {
    id: 2,
    title: 'Job étudiant – Service communal',
    date: '2024',
    icon: <Wrench size={22} className="text-emerald-600 dark:text-emerald-400" />,
    description:
      "Soutien aux équipes techniques : petits travaux, rangement et entretien. Polyvalence, organisation et respect strict des consignes au quotidien.",
    skills: ['Organisation', 'Polyvalence', 'Travail terrain'],
    dotColor: 'bg-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.1)',
  },
  {
    id: 3,
    title: 'Employé polyvalent – Restauration',
    date: '2021 – 2026',
    icon: <UtensilsCrossed size={22} className="text-gray-500 dark:text-slate-400" />,
    description:
      "5 ans d'expérience : préparation, mise en place, aide au service et plonge. Respect strict des normes d'hygiène et travail en équipe dans un environnement exigeant.",
    skills: ['Rigueur', "Travail d'équipe", 'Hygiène & normes', 'Résistance au stress'],
    dotColor: 'bg-gray-400',
    glowColor: 'rgba(100, 116, 139, 0.08)',
  },
];

const formations = [
  {
    degree: 'Bachelier en e-business',
    school: 'HEPL – Liège',
    period: '2024 → En cours',
    color: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    degree: 'CESS – Technique de qualification',
    school: 'Institut Pierrard – Virton',
    period: '2020 – 2024',
    color: 'text-gray-500 dark:text-slate-400',
    border: 'border-gray-200 dark:border-slate-700',
    bg: 'bg-gray-50 dark:bg-slate-800',
  },
];

const Experience = () => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 px-6 relative bg-white dark:bg-slate-900 overflow-hidden">
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
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
            Mon Parcours
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mes <span className="text-blue-600 dark:text-blue-400">Expériences</span>
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-lg mx-auto">
            Un parcours atypique qui allie savoir-être terrain et compétences techniques.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Vertical line track */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-slate-700 md:-translate-x-px" />

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
                className={`relative flex gap-0 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-5 md:left-1/2 top-7 w-4 h-4 ${exp.dotColor} rounded-full -translate-x-[7px] md:-translate-x-2 ring-4 ring-white dark:ring-slate-900 z-10`}
                />

                {/* Desktop spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="pl-14 md:pl-0 w-full md:w-1/2 md:px-10">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="border-gradient glass-dark p-6 sm:p-8 rounded-3xl relative overflow-hidden group shadow-md hover:shadow-lg"
                  >
                    {/* Card header */}
                    <div className="flex items-start justify-between relative z-10 mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center border border-gray-200 dark:border-slate-600 group-hover:border-gray-300 dark:group-hover:border-slate-500 transition-colors">
                        {exp.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-600">
                        {exp.date}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400 mb-5 leading-relaxed text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors"
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
          id="formations"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
              Diplômes
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Mes <span className="text-blue-600 dark:text-blue-400">Formations</span>
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
                className={`border-gradient p-6 rounded-2xl border ${f.border} ${f.bg} shadow-sm`}
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${f.color}`}>{f.period}</p>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{f.degree}</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm">{f.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
