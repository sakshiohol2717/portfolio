import Section, { Reveal } from "./Section.jsx";
import { profile } from "../data.js";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A developer who likes building things end to end">
      <div className="about">
        <Reveal className="about__text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="about__facts" delay={120}>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Java · Spring Boot · React</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>B.E. Electronics & Computer Engg.</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Available for full-time roles</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
