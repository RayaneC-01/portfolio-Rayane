// Page mes Projets
import { motion } from 'framer-motion';

export default function Projects() {
  // Liste des projets
  const projects = [
    {
      title: 'Arcade de Jeux',
      description: 'Une collection de jeux classiques en ligne, pour que les utilisateurs puissent jouer directement depuis leur navigateur ou sur mobile sans telecharger d\'application.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://rayanec-01.github.io/ListeDeJeux/',
    },
    {
      title: 'Portfolio Personnel',
        description: 'Un site web personnel pour présenter mes compétences, projets et expériences.',
        technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://rayanec-01.github.io/portfolio-Rayane/',
    },
    {
      title: 'To-Do List',
        description: 'Une application web pour gérer vos tâches quotidiennes de manière simple et efficace.',
        technologies: ['ReactJS', 'Tailwind CSS', 'Local Storage'],
        link: 'https://rayanec-01.github.io/ToDoList/',
    },
  ];
    return (
    <section id="Projects" className="py-20 bg-slate-950 text-white relative overflow-hidden">
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
                Mes Projets
            </h2>
            <div className="mt-3 h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>
        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span

                            key={techIndex}
                            className="inline-block bg-indigo-500 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
                >
                    Voir le projet
                </a>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  );
}