import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import CategoryBadge from "../components/ui/CategoryBadge";
import { PROJECTS } from "../data/projects";
import "../styles/projects.css";
import "../styles/variables.css";

// Case study sections — rendered in order, skipped if field is null
const CASE_STUDY_SECTIONS = [
  { key: "businessProblem", label: "Business Problem", step: "01" },
  { key: "requirements", label: "Requirements", step: "02" },
  { key: "analysis", label: "Analysis", step: "03" },
  { key: "solution", label: "Solution", step: "04" },
  { key: "systemDesign", label: "System Design", step: "05" },
  { key: "implementation", label: "Implementation", step: "06" },
  { key: "businessImpact", label: "Results", step: "07" },
  { key: "lessonsLearned", label: "Lessons Learned", step: "08" },
];

function renderField(content) {
  if (!content) return null;
  if (Array.isArray(content)) {
    return (
      <ul className="case-study-list">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="case-study-body">{content}</p>;
}

function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="case-study-page">
        <Container>
          <Link to="/project" className="case-study-back">
            ← Back to Projects
          </Link>
          <h1 style={{ color: "white" }}>Project not found</h1>
          <p style={{ color: "var(--text-muted)" }}>
            This project doesn't exist or has been removed.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <Particle />
      <Container>
        {/* Back link */}
        <Link to="/project" className="case-study-back">
          ← Back to Projects
        </Link>

        {/* Header */}
        <header className="case-study-header">
          <CategoryBadge label={project.category} />
          <h1
            style={{
              color: "var(--text-primary)",
              marginTop: "0.75rem",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 700,
            }}
          >
            {project.title}
          </h1>
          {project.myRole && (
            <p
              style={{
                color: "var(--accent)",
                fontFamily: "PT Mono, monospace",
                fontSize: "0.85rem",
                marginTop: "0.4rem",
                marginBottom: "0.8rem",
              }}
            >
              Role: {project.myRole}
            </p>
          )}
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: "1.65",
              maxWidth: "680px",
            }}
          >
            {project.shortDescription}
          </p>
          <div className="case-study-cta">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-mis"
                aria-label="View on GitHub"
              >
                GitHub →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-mis"
                aria-label="View live demo"
              >
                Live Demo →
              </a>
            )}
          </div>
        </header>

        {/* Overview — keyFeatures and businessAreas */}
        {(project.keyFeatures?.length > 0 ||
          project.businessAreas?.length > 0) && (
          <div className="case-study-section">
            <p className="case-study-step-label">Overview</p>
            <h3>Project Overview</h3>
            {project.businessAreas?.length > 0 && (
              <p style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Business Areas:{" "}
                </strong>
                {project.businessAreas.join(" · ")}
              </p>
            )}
            {project.keyFeatures?.length > 0 && (
              <>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Key Features:
                </p>
                <ul className="case-study-list">
                  {project.keyFeatures.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {/* Dynamic sections */}
        {CASE_STUDY_SECTIONS.map(({ key, label, step }) => {
          const content = project[key];
          if (!content) return null;
          return (
            <div key={key} className="case-study-section">
              <p className="case-study-step-label">
                {step} — {label}
              </p>
              <h3>{label}</h3>
              {renderField(content)}
            </div>
          );
        })}

        {/* Technologies */}
        <div className="case-study-section">
          <p className="case-study-step-label">Technologies</p>
          <h3>Technologies Used</h3>
          <div className="project-card-tech" style={{ marginTop: "0.5rem" }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectDetail;
