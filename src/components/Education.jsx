import Section, { Reveal } from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Where I studied">
      <div className="timeline">
        {education.map((e) => (
          <Reveal key={e.degree} className="timeline__item">
            <span className="timeline__dot" />
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
            <p className="muted">{e.period}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
