import { useEffect, useRef } from "react";

function CaseStudyDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <article className="case-content">

        {/* Modal header */}
        <header className="case-top font-mono">
          <span>
            {project.number} / {project.category}
          </span>

          <button type="button" onClick={onClose} autoFocus>
            {"<CLOSE/>"} ×
          </button>
        </header>

        {/* Project title */}
        <h2 id="case-title">{project.title}</h2>

        <p className="case-intro">
          {project.summary}
        </p>

        {/* Challenge */}
        <section>
          <h3>01 / The challenge</h3>
          <p>{project.challenge}</p>
        </section>

        {/* Implementation */}
        <section>
          <h3>02 / Technical implementation</h3>

          <ul>
            {project.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Lessons learned */}
        <section>
          <h3>03 / Lessons learned</h3>
          <p>{project.learned}</p>
        </section>

        {/* Future improvements */}
        <section>
          <h3>04 / Next steps</h3>
          <p>{project.next}</p>
        </section>

        {/* Project links */}
        <div className="project-actions font-mono">
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
              Live demo ↗
            </a>
          )}
        </div>

      </article>
    </dialog>
  );
}

export default CaseStudyDialog;