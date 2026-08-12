import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Le Phuc Hung</span> from{" "}
            <span className="purple">Vietnam</span>.
            <br />
            I'm currently a{" "}
            <span className="purple">
              Management Information Systems
            </span>{" "}
            student passionate about bridging business requirements and technology.
            <br />
            <br />
            Outside of studying, I enjoy activities that keep me curious and
            engaged:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about business and systems thinking 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal data projects 📊
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &ldquo;Build systems that make business decisions clearer.&rdquo;{" "}
          </p>
          <footer className="blockquote-footer">Le Phuc Hung</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
