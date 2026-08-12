import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryBadge from "./CategoryBadge";
import "../../styles/projects.css";

/**
 * ProjectCard (MIS redesign)
 * Displays: category badge, title, short description, tech tags, CTA button.
 * On click: navigates to /projects/:id (case study page).
 */
function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleViewCaseStudy = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article
      className="project-card-mis"
      aria-label={`Project: ${project.title}`}
    >
      <div>
        <CategoryBadge label={project.category} />
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.shortDescription}</p>
      </div>
      <div className="project-card-tech" aria-label="Technologies">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tech-tag">+{project.technologies.length - 4}</span>
        )}
      </div>
      <button
        className="btn-case-study"
        onClick={handleViewCaseStudy}
        aria-label={`View case study for ${project.title}`}
      >
        View Case Study →
      </button>
    </article>
  );
}

export default ProjectCard;
