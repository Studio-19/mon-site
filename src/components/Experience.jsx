import { motion } from 'framer-motion';
import { UtensilsCrossed, Monitor } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Web junior",
      date: "Projet Récent",
      icon: <Monitor size={24} className="text-blue-400" />,
      description: "Conception et création de A à Z d'un site web complet pour un particulier. De l'analyse des besoins au maquettage UX/UI, jusqu'au développement technique.",
      skills: ["React", "UI/UX", "Tailwind CSS", "Gestion de Projet"]
    },
    {
      id: 2,
      title: "Secteur de la Restauration",
      date: "Depuis mes 15 ans",
      icon: <UtensilsCrossed size={24} className="text-gray-400" />,
      description: "Plusieurs années d'expérience en restauration. Cette expérience fondatrice m'a forgé une rigueur à toute épreuve, une grande résistance au stress et un sens aigu du contact client.",
      skills: ["Rigueur", "Contact Client", "Travail d'équipe", "Adaptabilité"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-brand-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mes <span className="text-blue-400">Expériences</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Un parcours atypique qui allie savoir-être terrain et compétences techniques.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-3xl border border-blue-900/40 relative overflow-hidden group shadow-lg cursor-default"
            >
              {/* Background accent glow on hover */}
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-400/10 transition-colors pointer-events-none" />

              <div className="flex items-start justify-between relative z-10 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  {exp.icon}
                </div>
                <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-slate-800 text-gray-300 border border-slate-700">
                  {exp.date}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-300 rounded-md border border-blue-800/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
