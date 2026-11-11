import { skillGroups, courseUrl } from "../content";
import TechIcon from "./TechIcon";
import Arrow from "./Arrow";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">TOOLS FOR ASKING BETTER QUESTIONS</p>
          <h2>
            My tech stack<span className="accent">.</span>
          </h2>
          <p>
            Technologies covered in my data science training — from exploration
            to modeling.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="tools">
                {group.tools.map((tool) => (
                  <div className="tool" key={tool.name}>
                    <TechIcon name={tool.icon} />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="curriculum-note">
          Grounded in{" "}
          <a href={courseUrl} target="_blank" rel="noreferrer">
            365 Careers’ Data Science Bootcamp curriculum <Arrow />
          </a>
        </p>
      </div>
    </section>
  );
}
