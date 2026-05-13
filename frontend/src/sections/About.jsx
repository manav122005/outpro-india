import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#111",
        padding: "120px 0",
      }}
    >
      <Container>

        <Row className="align-items-center">

          <Col lg={6}>
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=2070&auto=format&fit=crop"
              alt="About Outpro"
              style={{
                width: "100%",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.5)",
              }}
            />
          </Col>

          <Col lg={6} style={{ paddingLeft: "50px" }}>

            <p
              style={{
                color: "#C1121F",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              ABOUT OUTPRO.INDIA
            </p>

            <h2
              style={{
                fontSize: "52px",
                fontWeight: "800",
                marginBottom: "25px",
                lineHeight: "1.2",
              }}
            >
              Building Powerful Sports & Event Experiences
            </h2>

            <p
              style={{
                color: "#bbb",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              Born from a passionate community of athletes and
               organizers, Outpro India blends creativity, precision, 
               and execution to deliver unforgettable sports and event 
               experiences across India.
            </p>

            <p
              style={{
                color: "#bbb",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              From grassroots tournaments to large-scale corporate 
              leagues and institutional sports festivals, our mission 
              is to transform ideas into adrenaline-driven experiences 
              that inspire participation, teamwork, and celebration.
            </p>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default About;