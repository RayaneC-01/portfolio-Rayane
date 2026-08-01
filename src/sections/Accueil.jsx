//Page d'accueil
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll';

export default function Accueil() {
  return (
    <>
      <section
        id="Accueil"
        className="relative bg-slate-950 text-white min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Salut, je suis Rayane
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-slate-300">
              <Typewriter
                words={[
                  "Développeur Web",
                  "Passionné par le code",
                  "Toujours en apprentissage",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Bienvenue sur mon portfolio ! Découvrez mes projets, compétences
              et expériences en développement web.
            </p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 cursor-pointer"
            >
              Voir mes projets
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
