// Navbar responsive 
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    // 1. Etat pour gérer l'ouverture et la fermeture du menu
    const [isOpen, setIsOpen] = useState(false);
    // 2. Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // 3. Fonction pour fermer le menu lorsque l'utilisateur clique sur un lien
    const closeMenu = () => {
        setIsOpen(false);
    };
    // 4. Rendu du composant Navbar
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="Accueil" smooth={true} duration={500} onClick={closeMenu}>
                        Portfolio
                    </Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="Accueil" smooth={true} duration={500} onClick={closeMenu}>
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="About" smooth={true} duration={500} onClick={closeMenu}>
                            A Propos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Projects" smooth={true} duration={500} onClick={closeMenu}>
                        Mes Projets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Contact" smooth={true} duration={500} onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// const styles = {
//     navbar: {
//         position: 'fixed',  
//         top: 0,
//         width: '100%',
//         backgroundColor: '#333',
//         color: '#fff',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '0.5rem 1rem',
//         zIndex: 1000,
//     },
//     navbarLogo: {
//         fontSize: '1.5rem',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//     },
//     menuIcon: {
//         fontSize: '1.5rem',
//         cursor: 'pointer',
//     },
//     navMenu: {
//         display: 'flex',
//         listStyle: 'none',
//         margin: 0,
//         padding: 0,
//     },
//     navItem: {  
//         marginLeft: '1rem',
//         cursor: 'pointer',
//     },
//     // Media query for mobile view
//     '@media (max-width: 768px)': {
//         navMenu: {
//             display: 'none',
//             flexDirection: 'column',
//             position: 'absolute',
//             top: '100%',
//             left: 0,
//             width: '100%',
//             backgroundColor: '#333',
//         },
//         navMenuActive: {
//             display: 'flex',
//         },
//         navItem: {
//             margin: '1rem 0',
//         },
//     },
// };