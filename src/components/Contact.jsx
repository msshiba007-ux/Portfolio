import { useState } from "react";
import { profile } from "../content";
import Arrow from "./Arrow";

export default function Contact() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hi Mariam,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry from " + data.get("name"))}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app will open with your message. Send it there to get in touch.",
    );
  }
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Good questions.
            <br />
            New possibilities<span className="accent">.</span>
          </h2>
          <p>
            Interested in data science, AI, or building something together? I’d
            love to connect.
          </p>
          {profile.email && (
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
          )}
          <div className="social-links">
            {profile.links.map((link) => (
              <span key={link.label}>
                {link.url ? (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label} <Arrow />
                  </a>
                ) : (
                  `[${link.label} URL]`
                )}
              </span>
            ))}
          </div>
        </div>
        {profile.email ? (
          <form onSubmit={handleSubmit}>
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                placeholder="Alex Smith"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="alex@example.com"
              />
            </label>
            <label>
              Your message
              <textarea
                name="message"
                required
                rows="4"
                placeholder="What do you have in mind?"
              />
            </label>
            <button className="button" type="submit">
              Compose email <Arrow />
            </button>
            <p role="status">{status}</p>
          </form>
        ) : (
          <div className="contact-note">
            <span aria-hidden="true">↗</span>
            <h3>[Your email address]</h3>
            <p>
              [Add your preferred contact details and a short invitation to
              connect.]
            </p>
            <a className="button" href="#journey">
              View my journey <Arrow />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
