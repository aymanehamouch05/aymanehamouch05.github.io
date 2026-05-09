const ProjectCard = ({ title, description, tech, icon }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <i className={icon}></i>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <a href="https://github.com/aymanehamouch05" className="btn-project" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> Voir sur GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;