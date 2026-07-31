// Importation des composants d'interface globaux
import Navbar from './components/Navbar';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

// Importation des différentes sections du portfolio
import Accueil from './sections/Accueil';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-indigo-500 selection:text-white">
      {/* Arrière-plan animé fixe sur tout le site */}
      <Background />
      
      {/* Barre de navigation fixée en haut */}
      <Navbar />
      
      {/* Contenu principal regroupant toutes les sections de la page unique (SPA) */}
      <main>
        <Accueil />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Bouton flottant pour remonter en haut de page */}
      <ScrollToTop />
    </div>
  );
}