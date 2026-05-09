import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projectsData = [
    {
      title: "Web_site E-Commerce Luxe Car",
      description: "Plateforme de vente de pièces de rechange pour voitures de luxe (Mercedes, BMW, Audi). Gestion du catalogue et du panier.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://github.com/Aymane-HAMOUCH",
      icon: "fas fa-car-side"
    },
    {
      title: "MiniGame C++",
      description: "Développement d'un jeu de type Endless Runner avec gestion des collisions, animations et niveaux progressifs.",
      tech: ["C++", "SFML"], // Utilisation de SFML confirmée pour ton projet C++
      link: "https://github.com/aymanehamouch05",
      icon: "fas fa-gamepad"
    }
  ];

  return (
    <section id="projets" className="container">
      <h2 className="section-title">Expériences & Projets</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} /> 
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;