import { profile } from "../content";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container narrow">
        <p className="eyebrow">THE PERSON BEHIND THE DATA</p>
        <h2>
          About me<span className="accent">.</span>
        </h2>
        <p>{profile.about}</p>
      </div>
    </section>
  );
}
