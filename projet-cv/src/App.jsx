import { useState, useEffect} from 'react' ;
import $ from 'jquery';
import './App.css' ;
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './ContactForm';

function App() {
    /* pour le boutton darKMode */
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
   }, [darkMode]);

      useEffect(() => {
    // --- 1. INITIALISATION DES SECTIONS ---
    // On cache les détails des formations au départ
    $('.timeline-content p, .timeline-content h4').hide();
    $('.timeline-item').css('cursor', 'pointer');

    // --- 2. ANIMATION DES BARRES DE PROGRESSION ---
    // Un petit délai pour s'assurer que le rendu React est stable
    const timeout = setTimeout(() => {
      $('.progress').each(function() {
        const level = $(this).attr('data-level');
        $(this).stop().animate({
          width: level
        }, 2000);
      });
    }, 100);

    // --- 3. GESTION DE L'ACCORDÉON (FORMATION) ---
    const handleTimelineClick = function() {
      const currentContent = $(this).find('p, h4');

      // Fermer les autres et retirer leur classe active
      $('.timeline-content p, .timeline-content h4').not(currentContent).slideUp(500);
      $('.timeline-cercle').not($(this).find('.timeline-cercle')).removeClass('active-dot');

      // Ouvrir/Fermer l'élément actuel
      currentContent.slideToggle(500);
      $(this).find('.timeline-cercle').toggleClass('active-dot');
    };

    $('.timeline-item').on('click', handleTimelineClick);

    // --- 4. NETTOYAGE (CLEANUP) ---
    return () => {
      clearTimeout(timeout);
      $('.timeline-item').off('click', handleTimelineClick);
    };
  }, []);

  return (
    <>
      <header id="header">
        <div className="left-side">
          <div className="profile-container" >
            {/* Assure-toi que le chemin de l'image est correct dans ton projet Vite */}
            <img src="src/assets/img-profil.jpeg" alt="photo de profil" />
          </div>
          <div className="info">   
            <h1>Aymane Hamouch</h1>
            <p className="filiere">Étudiant en Informatique - FSSM</p>
          </div>
        </div>
            
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#about">À propos</a></li>
              <li><a href="#competences">Compétences</a></li>
              <li><a href="#formation">Formation</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

        <nav className="right-side">
                    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <ul className="list-contact">
            <li>
              <a href="mailto:ay.hamouch05@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hamouchaymane/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/aymanehamouch05" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
       <section id="about" className="container">
            <h2 className="section-title">À propos de moi</h2>
             <p className="biographie"> 
             Étudiant en deuxième année de Sciences Informatique (S4) 
             à la Faculté des Sciences Semlalia de Marrakech, je nourris
             une passion profonde pour le développement logiciel et les
             technologies web. Mon cursus académique m'a permis d'acquérir 
             des bases solides en algorithmique et en programmation orientée
             objet, principalement à travers le langage C++. Animé par le goût
             du défi technique, je m'investis dans des projets concrets tels que 
             la conception de jeux interactifs avec la bibliothèque SFML et le développement
             d'interfaces utilisateur dynamiques. À terme, mon ambition est d'évoluer 
             en tant qu'ingénieur logiciel, en contribuant activement à des projets
             innovants tout en poursuivant une progression technique constante.
             </p>
        </section>
      
        <section id="competences" className="container">
            <h2 className="section-title">Compétences</h2>
            <div className="competences-group">
          <div className="competences-grid">
            <div className="competence-card">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="image C++" className="skill-icon"/>
                <span className="competence-name">Language C++</span>
                <div className="progress-bar">
                    <div className="progress" data-level="85%"></div>
                </div>
            </div>

             <div className="competence-card">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="image C" className="skill-icon"/>
                <span className="competence-name">Language C</span>
                <div className="progress-bar">
                    <div className="progress" data-level="85%"></div>
                </div>
            </div>

            <div className="competence-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="image C" className="skill-icon"/>
                <span className="competence-name">React</span>
                <div className="progress-bar">
                    <div className="progress" data-level="85%"></div>
                </div>
            </div>
            
            

            <div className="competence-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="image CSS3" className="skill-icon"/>
                <span className="competence-name">CSS3</span>
                <div className="progress-bar">
                    <div className="progress" data-level="75%"></div>
                </div>
            </div>

             <div className="competence-card">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="image HTML5" className="skill-icon"/>
                <span className="competence-name">HTML5</span>
                <div className="progress-bar">
                    <div className="progress" data-level="75%"></div>
                </div> 
            </div>

            <div className="competence-card">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="image JS" className="skill-icon"/>
                <span className="competence-name">JavaScript</span>
                <div className="progress-bar">
                    <div className="progress" data-level="70%"></div>
                </div>
            </div>
            
            <div className="competence-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt='Image MysQl' className="skill-icon"/>
                <span className="competence-name">MysQl</span>
                <div className="progress-bar">
                    <div className="progress" data-level="75%"></div>
                </div>
            </div>

            <div className="competence-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='Image Node JS ' className="skill-icon"/>
                <span className="competence-name">Node JS</span>
                <div className="progress-bar">
                    <div className="progress" data-level="75%"></div>
                </div>
            </div>

             <div className="competence-card">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="image GitHub" className="skill-icon"/>
                <span className="competence-name">GitHub</span>
                <div className="progress-bar">
                    <div className="progress" data-level="70%"></div>
                </div>
                  <small>Gestion de version / Travail collaboratif</small>
            </div>
            
             <div className="competence-card">
               <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="image C" className="skill-icon"/>
                <span className="competence-name">Linux (Ubuntu)</span>
                <div className="progress-bar">
                     <div class="progress" data-level="75%"></div>
                </div>
                    <small>Environnement de développement / Terminal</small>
            </div>

         </div>
        </div>
        </section>
        
        
        <section id="formation" class="container">
          <h2 className="section-title">Formation</h2>
        <div className="timeline">
        
         <div className="timeline-item">
            <div className="timeline-cercle"></div>
            <div className="timeline-content">
                <span className="date">2023</span>
                <h3>Baccalauréat - Sciences Mathématiques (A)</h3>
                <h4>Lycée Mohammed VI - Ouarzazate</h4>
            </div>
        </div>

        <div className="timeline-item">
            <div className="timeline-cercle"></div>
            <div className="timeline-content">
                <span className="date">2023 - Présent</span>
                <h3>DEUG en Informatique (S4)</h3>
                <h4>Faculté des Sciences Semlalia de Marrakech (FSSM)</h4>
            </div>
        </div>
    </div>
        </section>
       
        <ProjectsSection />
     
        <ContactForm/>

      <footer className='footer'>
        <div className='container'>
          <div className='content'>  <p>
            © 2026 — Conçu et développé par <span className="footer-name">HAMOUCH Aymane</span>
          </p>
          </div>
        </div>
     
      </footer>

    </main>
    </>
  )
}

export default App