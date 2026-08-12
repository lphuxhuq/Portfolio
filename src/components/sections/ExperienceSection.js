import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../ui/SectionTitle";
import { EXPERIENCES } from "../../data/experience";
import "../../styles/experience.css";

function ExperienceSection() {
  return (
    <section className="experience-section" aria-label="Professional Experience">
      <Container>
        <SectionTitle title="Professional" highlight="Experience" />
        {EXPERIENCES.length === 0 ? (
          <div className="experience-placeholder">
            <p>Experience information will be added soon.</p>
          </div>
        ) : (
          <div className="experience-timeline" role="list">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="experience-item"
                role="listitem"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-meta">
                  {exp.location} &middot; {exp.startDate} &ndash; {exp.endDate}
                </p>
                {exp.overview && (
                  <p className="experience-overview">{exp.overview}</p>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div
                    className="experience-tech-row"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((t) => (
                      <span key={t} className="experience-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ExperienceSection;
