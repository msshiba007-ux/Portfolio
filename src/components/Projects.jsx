import { projects } from "../content";
import Arrow from "./Arrow";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FROM THEORY TO PRACTICE</p>
          <h2>
            Selected work<span className="accent">.</span>
          </h2>
        </div>
        {projects.length ? (
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                {project.image && (
                  <img src={project.image} alt={project.title} loading="lazy" />
                )}
                <h3>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.title} <Arrow />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="work-in-progress">
            <span className="work-symbol" aria-hidden="true">
              {"{ }"}
            </span>
            <div>
              <h3>The next chapter is hands-on.</h3>
              <p>
                Project case studies will appear here as they’re ready to share.
              </p>
            </div>
            <a className="text-link" href="#skills">
              Explore the toolkit <Arrow />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
