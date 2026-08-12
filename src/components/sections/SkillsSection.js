import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import { SKILL_GROUPS } from "../../data/skills";
import "../../styles/skills.css";

function SkillsSection() {
  return (
    <section className="skills-section about-section" aria-label="Professional Skillset">
      <Container>
        <SectionTitle title="Professional" highlight="Skillset" />
        <Row>
          {SKILL_GROUPS.map(({ id, group, skills }) => (
            <Col md={6} lg={4} key={id} className="skill-group-block">
              <h3 className="skill-group-label">{group}</h3>
              <ul
                className="skill-badges-list"
                aria-label={`${group} skills`}
              >
                {skills.map((skill) => (
                  <li key={skill}>
                    <SkillBadge skill={skill} />
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SkillsSection;
