import { useState } from "react";
import Section, { Reveal } from "./Section.jsx";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's work together">
      <div className="contact">
        <Reveal className="contact__info">
          <p>
            I'm actively looking for a Java Full Stack / Software Developer role. Send me a message
            and I'll get back to you soon.
          </p>
          <ul>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              {profile.location}
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                View profile ↗
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                View profile ↗
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form className="card form" onSubmit={submit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                placeholder="your.email@company.com"


              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                placeholder="Tell me about the role or project…"
              />
            </label>
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
