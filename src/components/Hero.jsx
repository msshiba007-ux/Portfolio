import { profile } from "../content";
import Header from "./Header";
import DataArtwork from "./DataArtwork";
import Arrow from "./Arrow";
import { siGithub } from "simple-icons";

export default function Hero() {
  const github = profile.links.find((link) => link.label.toLowerCase() === "github");
  return (
    <section className="hero" id="home">
      <Header />
      <div className="hero-body container">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>
            {profile.headline}
            <br />
            <span>{profile.headlineAccent}</span>
          </h1>
          <p>{profile.introduction}</p>
          <div className="actions">
            <a className="button" href="#journey">
              Explore my journey <Arrow />
            </a>
            <a className="button button-outline" href="#skills">
              My toolkit
            </a>
          </div>
          {github?.url && (
            <a
              className="hero-github"
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile (opens in a new tab)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d={siGithub.path} />
              </svg>
              <span>GitHub</span>
              <Arrow />
            </a>
          )}
        </div>
        {profile.portrait ? (
          <img className="portrait" src={profile.portrait} alt={profile.name} />
        ) : (
          <DataArtwork />
        )}
      </div>
      <div className="hero-bottom container">
        <span>{profile.name}</span>
        <span>Always learning. Always curious.</span>
        <a href="#about" aria-label="Scroll to about me">
          ↓
        </a>
      </div>
    </section>
  );
}
