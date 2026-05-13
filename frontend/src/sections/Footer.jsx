import React from "react";
import { Container } from "react-bootstrap";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      style={{
        backgroundColor: "#0A0A0A",
        padding: "40px 0",
        borderTop: "1px solid #222",
      }}
    >

      <Container
        className="d-flex flex-column flex-md-row justify-content-between align-items-center"
        style={{
          gap: "20px",
        }}
      >

        {/* LOGO */}

        <h3
          style={{
            color: "#C1121F",
            fontWeight: "800",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          OUTPRO.INDIA
        </h3>

        {/* COPYRIGHT */}

        <p
          style={{
            color: "#888",
            margin: 0,
            textAlign: "center",
          }}
        >
          © 2026 Outpro India. All Rights Reserved.
        </p>

        {/* SOCIALS */}

        <div
          className="d-flex gap-4"
          style={{
            alignItems: "center",
          }}
        >

          <a
            href="https://www.instagram.com/outpro.india/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              transition: "0.3s",
            }}
          >

            <FaInstagram
              size={24}
              style={{
                cursor: "pointer",
              }}
            />

          </a>

          <a
            href="https://www.linkedin.com/company/outpro-india/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              transition: "0.3s",
            }}
          >

            <FaLinkedin
              size={24}
              style={{
                cursor: "pointer",
              }}
            />

          </a>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;