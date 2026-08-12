import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../ui/SectionTitle";
import "../../styles/about.css";

const CAREER_TARGETS = [
  {
    type: "Primary",
    roles: ["Business Analyst", "IT Business Analyst"],
  },
  {
    type: "Secondary",
    roles: ["Data Analyst", "BI Analyst"],
  },
  {
    type: "Technical",
    roles: ["Information Systems Developer"],
  },
];

function CareerFocus() {
  return (
    <section className="career-focus-section" aria-label="Career Focus">
      <Container>
        <SectionTitle title="Career" highlight="Focus" />
        <Row className="justify-content-center">
          {CAREER_TARGETS.map(({ type, roles }) => (
            <Col md={4} key={type}>
              <div className="career-focus-card">
                <p className="career-focus-type">{type}</p>
                {roles.map((role) => (
                  <p key={role} className="career-focus-role">
                    {role}
                  </p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CareerFocus;
