// Page mes Projets
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  // Liste des projets
  const projects = [
    {
      title: 'Arcade de Jeux',
      img: 'https://images.unsplash.com/photo-1595587870672-c79b47875c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fHww', // Remplacez par l'URL de l'image du projet
      description: 'Une collection de jeux classiques en ligne, pour que les utilisateurs puissent jouer directement depuis leur navigateur ou sur mobile sans télécharger d\'application.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://rayanec-01.github.io/ListeDeJeux/',
    },
    {
      title: 'Mes Recettes',
      description: 'MesRecettes est une application web de gestion de recettes de cuisine. Elle permet aux utilisateurs de créer, consulter et gérer leurs recettes préférées, le tout dans une interface simple et intuitive.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion', 'Express.js', 'MongoDB'],
      link: 'https://rayanec-01.github.io/portfolio-Rayane/', // À remplacer par le bon lien
    },
    {
      title: 'To-Do List',
      description: 'Une application web pour gérer vos tâches quotidiennes de manière simple et efficace.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Local Storage'],
      link: 'https://rayanec-01.github.io/AppToDoList/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de la section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="mt-3 h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Liste des projets sous forme de grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title}</h3>
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                {/* Badges Techno */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bouton vers le projet */}
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-indigo-500/20"
                >
                  <span>Voir le projet</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}