import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import CareerFocus from "../sections/CareerFocus";
import CoreStrengths from "../sections/CoreStrengths";
import SkillsSection from "../sections/SkillsSection";
import ExperienceSection from "../sections/ExperienceSection";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* About Me */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={9}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Career Focus section */}
      <CareerFocus />

      {/* Core Strengths */}
      <CoreStrengths />

      {/* Skills */}
      <Container fluid className="about-section" style={{ paddingTop: 0 }}>
        <Container>
          <SkillsSection />
          <ExperienceSection />
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
