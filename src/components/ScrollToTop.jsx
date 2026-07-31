import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  // État local pour suivre la visibilité du bouton (masqué par défaut
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fonction qui vérifie la position du défilement vertical (scroll)
    const toggleVisibility = () => {
      // Si on a défilé de plus de 300px vers le bas, on affiche le bouton
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écouteur d'événement sur le défilement de la fenêtre
    window.addEventListener('scroll', toggleVisibility);

    // Nettoyage de l'écouteur d'événement quand le composant est démonté
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut de la page de manière fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animation de défilement douce
    });
  };

  // Si le scroll n'a pas dépassé 300px, on ne rend rien dans le DOM
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}