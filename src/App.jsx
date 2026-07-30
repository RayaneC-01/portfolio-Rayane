// IMPORTATION des fichiers nécessaires
import Navbar from './components/Navbar'
import Accueil from './sections/Accueil'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
// import ScrollToTop from './components/ScrollToTop'

// COMPOSANT PRINCIPAL de l'application
function App() {

  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <About />
      <Projects />
      <Contact />
      {/* <ScrollToTop /> */}
    </div>
  )
}

export default App