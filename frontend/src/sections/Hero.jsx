import React from "react";
import { Link } from "react-scroll";

function Hero() {

  return (

    <section
      id="home"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82)), url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "140px 8% 60px 8%",
      }}
    >

      <div
        style={{
          maxWidth: "720px",
        }}
      >

        {/* TOP TEXT */}

        <p
          style={{
            color: "#C1121F",
            letterSpacing: "4px",
            fontWeight: "600",
            marginBottom: "18px",
            fontSize: "16px",
          }}
        >
          SPORTS • EVENTS • BRAND EXPERIENCES
        </p>

        {/* MAIN HEADING */}

        <h1
          style={{
            fontSize: "clamp(52px, 6vw, 88px)",
            lineHeight: "1.05",
            fontWeight: "800",
            marginBottom: "28px",
            maxWidth: "700px",
          }}
        >
          Engineering
          <span style={{ color: "#C1121F" }}>
            {" "}Extraordinary Sports &
          </span>
          <br />
          Adventure Experiences
        </h1>

        {/* DESCRIPTION */}

        <p
          style={{
            color: "#D1D1D1",
            fontSize: "20px",
            lineHeight: "1.8",
            marginBottom: "45px",
            maxWidth: "620px",
          }}
        >
          Outpro.India is a Jaipur-based sports and adventure event 
          management company delivering world-class execution for 
          tournaments, leagues, brand activations, institutional 
          sports fests, and immersive audience experiences.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
          >

        <button
          style={{
            background: "#C1121F",
            color: "white",
            border: "none",
            padding: "16px 30px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
        Explore Services
        </button>

          </Link>

          {/* <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "16px 34px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View Portfolio
          </button> */}

        </div>

        {/* STATS */}

        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "70px",
            flexWrap: "wrap",
          }}
        >

          <div>
            <h2
              style={{
                color: "#C1121F",
                fontSize: "40px",
                marginBottom: "8px",
              }}
            >
              120+
            </h2>

            <p style={{ color: "#D1D1D1" }}>
              Events Executed
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#C1121F",
                fontSize: "40px",
                marginBottom: "8px",
              }}
            >
              50+
            </h2>

            <p style={{ color: "#D1D1D1" }}>
              Brand Collaborations
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#C1121F",
                fontSize: "40px",
                marginBottom: "8px",
              }}
            >
              1M+
            </h2>

            <p style={{ color: "#D1D1D1" }}>
              Audience Reach
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;