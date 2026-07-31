import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Utilisation de lucide-react comme sur le reste du site

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Vos liens de navigation
  const navLinks = [
    { name: 'Accueil', target: 'accueil' },
    { name: 'À Propos', target: 'about' },
    { name: 'Mes Projets', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-980 text-white z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
          <Link to="accueil" smooth={true} duration={500} onClick={closeMenu}>
            Portfolio
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.target}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-indigo-400 font-semibold"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Deroulant */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.target}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block py-2 text-slate-300 hover:text-indigo-400 font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}