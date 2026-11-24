import Section, { Reveal } from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <div className="grid grid--2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="card project">
            <div className="project__head">
              <span className="project__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.title}</h3>
                <p className="muted">{p.subtitle}</p>
              </div>
            </div>
            <p>{p.description}</p>
            <ul className="project__list">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className="chips">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="project__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
