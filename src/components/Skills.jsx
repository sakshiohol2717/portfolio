import Section, { Reveal } from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tech stack I work with">
      <div className="grid grid--4">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 80} className="card">
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
