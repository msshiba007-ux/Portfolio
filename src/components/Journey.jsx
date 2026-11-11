import { profile, education, experience, certificates } from "../content";
import Timeline from "./Timeline";
import Arrow from "./Arrow";

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">LEARNING, BUILDING, GROWING</p>
          <h2>
            My journey<span className="accent">.</span>
          </h2>
          <p>
            A foundation in data. A continuing curiosity about what comes next.
          </p>
        </div>
        <div className="journey-grid">
          <div>
            <Timeline title="Education" entries={education} />
            {/* <Timeline title="Experience" entries={experience} /> */}
          </div>
          <div className="certificates">
            <h3>Certificates</h3>
            {certificates.map((cert) => (
              <article className="certificate" key={cert.title}>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-image"
                  aria-label={`Open ${cert.title} PDF`}
                >
                  <img
                    src={cert.image}
                    alt={`Udemy certificate of completion awarded to ${profile.name}`}
                    width="1400"
                    height="1050"
                    loading="lazy"
                  />
                  <span>
                    View certificate <Arrow />
                  </span>
                </a>
                <div className="certificate-info">
                  <p className="entry-date">
                    {cert.issuer} · {cert.date}
                  </p>
                  <h4>{cert.title}</h4>
                  <div className="certificate-links">
                    <a href={cert.pdf} download>
                      Download PDF ↓
                    </a>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify credential <Arrow />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
