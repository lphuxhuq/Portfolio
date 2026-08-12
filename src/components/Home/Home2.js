import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I'm a{" "}
              <i>
                <b className="purple">Management Information Systems</b>
              </i>{" "}
              student passionate about connecting business requirements, data,
              and technology to build effective information systems.
              <br />
              <br />
              My focus areas include{" "}
              <i>
                <b className="purple">
                  Business Analysis, Data Analytics,
                </b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Information Systems Development</b>
              </i>
              .
              <br />
              <br />
              I work with technologies such as{" "}
              <b className="purple">SQL, C#, ASP.NET Core, Python,</b> and BI
              tools like{" "}
              <i>
                <b className="purple">Power BI</b>
              </i>{" "}
              to turn data into actionable insights and build systems that solve
              real business problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Profile avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
