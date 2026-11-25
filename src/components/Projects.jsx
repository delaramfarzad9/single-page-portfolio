import { useState } from "react";
import projects from "../assets/data/projects";
import ProjectCard from "./ProjectCard";
import CaseStudyDialog from "./CaseStudyDialog";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <header className="projects-header">
        <p className="font-mono text-sm">
          {"<WORK/>"}
        </p>

        <h2 id="projects-title">
          Selected work.
        </h2>

        <p className="projects-description">
          A selection of projects exploring design,
          development and application architecture.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <CaseStudyDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;