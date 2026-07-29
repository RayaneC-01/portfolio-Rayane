// Page a propos de moi
import { motion } from 'framer-motion';
import { Code2, Layout, Zap, Terminal } from 'lucide-react';

const About = () => {
  // Liste des cartes d'atouts/points forts
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      title: 'Développement Front-End',
      description: 'Conception d\'interfaces modernes, dynamiques et performantes avec ReactJS et l\'écosystème JS.',
    },
    {
      icon: <Layout className="w-8 h-8 text-sky-400" />,
      title: 'UI/UX & Responsive',
      description: 'Design soigné et adaptatif sur tous les écrans (Mobile, Tablette, Desktop) grâce à Tailwind CSS.',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: 'Animations & Interactivité',
      description: 'Intégration d\'animations fluides et d\'interactions intuitives pour une expérience utilisateur au top.',
    },
  ];

  // Liste de tes technologies / compétences clés
  const skills = [
    'ReactJS',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5 / CSS3 / JavaScript',
    'Vite',
    'Git / GitHub',
    'Responsive Design',
    'React Router',
    'RESTful APIs',
    'Node.js (bases)',
    'Express.js (bases)',
    'MongoDB (bases)',
    'MySQL'
  ];

  return (
    <section id="a-propos" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de la section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="mt-3 h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Présentation rapide */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16 text-slate-300 text-lg leading-relaxed"
        >
          <p>
            Passionné par le développement web, je me spécialise dans la création d'applications web modernes avec <span className="text-indigo-400 font-semibold">ReactJS</span> et <span className="text-cyan-400 font-semibold">Tailwind CSS</span>. <br />
            J'aime transformer des idées complexes en interfaces simples, élégantes et réactives.
          </p>
        </motion.div>

        {/* Grille des cartes d'atouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="p-3 bg-slate-800/80 rounded-xl w-fit mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-100">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Technologies / Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold text-slate-200">Technologies & Outils</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800/80 border border-slate-700/60 rounded-full text-slate-300 text-sm font-medium hover:border-indigo-400 hover:text-indigo-300 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;