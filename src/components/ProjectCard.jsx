function ProjectCard({ image, title, description, technologies, }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        
      </div>
    </article>
  );
}

export default ProjectCard;
