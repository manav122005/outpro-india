import React from "react";
import {
  FaFutbol,
  FaBullhorn,
  FaMountain,
  FaUsers,
  FaCamera,
  FaHandshake,
} from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaMountain />,
      title: "Sports & Adventure Events",
      desc: "Professional planning and execution of adventure experiences, tournaments, leagues, and large-scale sporting events.",
    },
    {
      icon: <FaFutbol />,
      title: "Institutional Sports Fests",
      desc: "Managing college, university, and institutional sports festivals with high-energy experiences and seamless coordination.",
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Activations",
      desc: "Creating immersive on-ground activations and sponsorship experiences that strengthen audience engagement.",
    },
    {
      icon: <FaUsers />,
      title: "Audience Engagement",
      desc: "Building unforgettable fan and participant experiences through interactive activities and event engagement strategies.",
    },
    {
      icon: <FaCamera />,
      title: "Social Media Campaigns",
      desc: "Delivering impactful sports-focused digital campaigns, event promotions, and audience-driven content strategies.",
    },
    {
      icon: <FaHandshake />,
      title: "Sponsorship & Partnerships",
      desc: "Connecting brands, institutions, and sports communities through meaningful collaborations and sponsorship management.",
    },
  ];

  return (

    <section
      id="services"
      style={{
        background: "#080808",
        color: "white",
        padding: "120px 8%",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >

        {/* TOP SECTION */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >

          <p
            style={{
              color: "#C1121F",
              letterSpacing: "4px",
              fontWeight: "600",
              marginBottom: "18px",
              fontSize: "14px",
            }}
          >
            WHAT WE DO
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: "800",
              marginBottom: "25px",
              lineHeight: "1.1",
            }}
          >
            Creating Extraordinary
            Sports & Event Experiences
          </h2>

          <p
            style={{
              color: "#BDBDBD",
              maxWidth: "780px",
              margin: "auto",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Outpro.India delivers innovative sports,
            adventure, and event management solutions
            focused on execution excellence, audience
            engagement, and impactful brand experiences.
          </p>

        </div>

        {/* SERVICE GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >

          {services.map((service, index) => (

            <div
              key={index}
              style={{
                background: "#111",
                padding: "42px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "0.4s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0px 0px 35px rgba(193,18,31,0.18)";
                e.currentTarget.style.border =
                  "1px solid rgba(193,18,31,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.05)";
              }}
            >

              {/* ICON */}

              <div
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "20px",
                  background: "rgba(193,18,31,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "#C1121F",
                  marginBottom: "30px",
                }}
              >
                {service.icon}
              </div>

              {/* TITLE */}

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                }}
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                style={{
                  color: "#BDBDBD",
                  lineHeight: "1.9",
                  fontSize: "17px",
                  marginBottom: 0,
                }}
              >
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;