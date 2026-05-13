import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonials() {

  const testimonials = [
  {
    name: "Rohan S.",
    role: "Football Event Partner",
    review:
      "The professionalism and coordination throughout the event exceeded expectations. Everything from scheduling to audience management was handled smoothly.",
  },

  {
    name: "Aditi M.",
    role: "Brand Collaboration Partner",
    review:
      "Outpro.India brought incredible energy and execution quality to the collaboration. The entire experience felt organized, creative, and impactful.",
  },

  {
    name: "Karan P.",
    role: "Sports Community Member",
    review:
      "One of the most engaging sports experiences we’ve been part of. The attention to detail and overall event atmosphere truly stood out.",
  },
];

  return (

    <section
      id="testimonials"
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
            WHAT PEOPLE SAY
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: "800",
              marginBottom: "25px",
              lineHeight: "1.1",
            }}
          >
            Trusted Through
            Execution & Experience
          </h2>

          <p
            style={{
              color: "#BDBDBD",
              maxWidth: "760px",
              margin: "auto",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Outpro.India continues to build impactful
            sporting experiences through strong execution,
            meaningful collaborations, and audience-first
            event management.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >

          {testimonials.map((item, index) => (

            <div
              key={index}
              style={{
                background: "#111",
                padding: "45px",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0px 0px 35px rgba(193,18,31,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              {/* STARS */}

              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginBottom: "25px",
                  color: "#C1121F",
                  fontSize: "18px",
                }}
              >

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* REVIEW */}

              <p
                style={{
                  color: "#D1D1D1",
                  lineHeight: "1.9",
                  fontSize: "17px",
                  marginBottom: "35px",
                }}
              >
                "{item.review}"
              </p>

              {/* CLIENT */}

              <div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  {item.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;