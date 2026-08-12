import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../ui/SectionTitle";
import "../../styles/about.css";

const STRENGTHS = [
  {
    icon: "📋",
    title: "Business Analysis",
    desc: "Translating business needs into clear requirements and system specifications using UML, BPMN, and structured analysis techniques.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Querying, cleaning, and visualizing data with SQL, Power BI, and Excel to support data-driven decision making.",
  },
  {
    icon: "🏗️",
    title: "Information Systems",
    desc: "Designing and building database-backed systems with proper access control, business logic, and ERD modeling.",
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Building web applications and APIs using C#, ASP.NET Core, Entity Framework, and REST API principles.",
  },
];

function CoreStrengths() {
  return (
    <section className="core-strengths-section" aria-label="Core Strengths">
      <Container>
        <SectionTitle title="Core" highlight="Strengths" />
        <Row>
          {STRENGTHS.map(({ icon, title, desc }) => (
            <Col md={6} lg={3} key={title}>
              <div className="strength-card">
                <span className="strength-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="strength-title">{title}</h3>
                <p className="strength-desc">{desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CoreStrengths;
