function ProjectCard({ project, onOpen }) {
  return (
    <div className={`project-container project-${project.id}`}>
      <article className="project-card">

        {/* Project information */}
        <div className="project-meta font-mono">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>

        {/* Project screenshot */}
        <div className="project-image">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
          />
        </div>

        {/* Project description */}
        <div className="project-copy">
          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-summary">
            {project.summary}
          </p>

          {project.status === "In development" && (
            <p className="project-status font-mono">
              In development
            </p>
          )}

          <div className="project-tech font-mono">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project actions */}
        <div className="project-actions font-mono">
          <button
            type="button"
            className="project-read"
            onClick={() => onOpen(project)}
            aria-label={`Read ${project.title} case study`}
          >
            {"<CASE STUDY/>"} ↗
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live ↗
            </a>
          )}
        </div>

      </article>
    </div>
  );
}

export default ProjectCard;