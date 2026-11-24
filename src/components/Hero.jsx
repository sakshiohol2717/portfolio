import { useEffect, useState } from "react";
import { profile } from "../data.js";

export default function Hero() {
  const [i, setI] = useState(0);
  const [photoOk, setPhotoOk] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  const initials = profile.name.split(" ").map((w) => w[0]).join("");

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="pill">
            <span className="dot" /> Open to fresher roles · 2026 graduate
          </p>
          <h1>
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>
          <h2 className="hero__role" key={i}>
            {profile.roles[i]}
          </h2>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn--ghost">Contact Me</a>
            <a href={profile.resume} className="btn btn--ghost" target="_blank" rel="noreferrer">
               Resume
            </a>
          </div>

          <ul className="hero__social">
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
          </ul>
        </div>

        <div className="avatar">
          {photoOk ? (
            <img src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />
          ) : (
            <span>{initials}</span>
          )}
        </div>
      </div>
    </section>
  );
}
