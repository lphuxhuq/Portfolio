import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import "../../styles/projects.css";
import "../../styles/variables.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />
      <Container>
        <SectionTitle
          title="My Recent"
          highlight="Works"
          subtitle="Click a project to read the full case study."
        />

        {/* Category Filter */}
        <nav
          className="projects-filter-bar"
          aria-label="Filter projects by category"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              aria-label={`Filter: ${cat}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Project Grid */}
        <Row>
          {filtered.length === 0 ? (
            <Col>
              <div className="projects-empty">
                <p>No projects in this category yet.</p>
              </div>
            </Col>
          ) : (
            filtered.map((project) => (
              <Col md={4} key={project.id} style={{ marginBottom: "1.5rem" }}>
                <ProjectCard project={project} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
