import { useState } from "react";
import projects from "../data/projects.js";
import Lightbox from "./Lightbox.jsx";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(null); // { projectId, index }
  const [originRect, setOriginRect] = useState(null);

  const activeProject = active
    ? projects.find((p) => p.id === active.projectId)
    : null;

  const openLightbox = (project, index, thumbEl) => {
    setOriginRect(thumbEl.getBoundingClientRect());
    setActive({ projectId: project.id, index });
  };

  const closeLightbox = () => {
    setActive(null);
    setOriginRect(null);
  };

  const navigate = (delta) => {
    if (!active || !activeProject) return;
    const total = activeProject.media.length;
    const nextIndex = (active.index + delta + total) % total;
    setOriginRect(null); // subsequent frames aren't tied to a thumbnail
    setActive({ ...active, index: nextIndex });
  };

  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">Cartridge Library</p>
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card pixel-border" key={project.id}>
              <div className="project-card__cover">
                <button
                  className="project-card__cover-button"
                  onClick={(e) =>
                    openLightbox(
                      project,
                      0,
                      e.currentTarget.querySelector("img"),
                    )
                  }
                  aria-label={`Open gallery for ${project.title}`}
                >
                  <img src={project.media[0].src} alt={project.media[0].alt} />
                </button>

                {project.media.length > 1 && (
                  <div className="project-card__thumbs">
                    {project.media.slice(1).map((m, i) => (
                      <button
                        key={m.src}
                        className="project-card__thumb"
                        onClick={(e) =>
                          openLightbox(
                            project,
                            i + 1,
                            e.currentTarget.querySelector("img"),
                          )
                        }
                        aria-label={`Open image ${i + 2} of ${project.media.length} for ${project.title}`}
                      >
                        <img src={m.src} alt={m.alt} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__links-container">
                  <p className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub
                      </a>
                    )}
                  </p>

                  <p className="project-card__links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        demo
                      </a>
                    )}
                  </p>
                </div>

                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox
        media={activeProject?.media ?? null}
        index={active?.index ?? null}
        originRect={originRect}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </section>
  );
}
