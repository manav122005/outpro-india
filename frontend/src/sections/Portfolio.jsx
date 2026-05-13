import React from "react";

function Portfolio() {

  const projects = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEqajyQAxqgrw/feedshare-shrink_800/B56ZuJpYttG4Ag-/0/1767540920006?e=1779926400&v=beta&t=RC6BA7t7Kkw3d2BNmE7bxelTqfgc87yGGYnnmNipvfY&q=80&w=2070&auto=format&fit=crop",
      title: "RUFC Winter Cup",
      category: "Football Tournament",
      description:
        "A competitive football tournament experience focused on youth participation, sportsmanship, and community engagement.",
    },

    {
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQHYeBHizGdwtA/feedshare-shrink_800/B56ZupKMV_GsAg-/0/1768069580413?e=1779926400&v=beta&t=p1WkBi_alOx12JnOiUTFkTYHbEm22nXGC3gNaerfc7w&q=80&w=2070&auto=format&fit=crop",
      title: "UDAAN Initiative",
      category: "Community Sports Initiative",
      description:
        "An initiative designed to encourage participation, teamwork, and positive social impact through sports-driven experiences.",
    },

    {
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQF-WbjxjYebqw/feedshare-shrink_800/B56ZslzKDQGsAo-/0/1765865739913?e=1779926400&v=beta&t=3rjTCxkrXXz0PIVObrtitbAAyPeSH9QGpMxe6YpXzT8&q=80&w=2070&auto=format&fit=crop",
      title: "LaunchED Global Partnership",
      category: "Brand Collaboration",
      description:
        "Collaborative event experiences and youth engagement campaigns executed through strategic partnerships and activations.",
    },

    {
      image:
      "https://media.licdn.com/dms/image/v2/D5622AQEpdOX5ZKORZg/feedshare-shrink_1280/B56Zue9vWmHgAs-/0/1767898550083?e=1779926400&v=beta&t=gpxbV_6aH2W3_2TUwMlOg-t2gCQPCIcKi1sWqP-MvWI&q=80&w=2070&auto=format&fit=crop",
      title: "RUFC Match Day Operations",
      category: "Football Event Execution",
      description:
      "Managing seamless on-ground coordination, athlete experience, audience engagement, and professional football event operations.",
    },
  ];

  return (

    <section
      id="portfolio"
      style={{
        background: "#0B0B0B",
        color: "white",
        padding: "120px 8%",
      }}
    >

      <div
        style={{
          maxWidth: "1350px",
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
            FEATURED EXPERIENCES
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: "800",
              marginBottom: "25px",
              lineHeight: "1.1",
            }}
          >
            Experiences That Inspire
            Energy, Passion & Community
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
            From sports tournaments and institutional
            events to brand collaborations and audience
            engagement initiatives, Outpro.India delivers
            experiences that create lasting impact.
          </p>

        </div>

        {/* GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >

          {projects.map((project, index) => (

            <div
              key={index}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "28px",
                height: "520px",
                cursor: "pointer",
                background: "#111",
              }}
            >

              {/* IMAGE */}

              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* OVERLAY */}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.96), rgba(0,0,0,0.2))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "35px",
                }}
              >

                <p
                  style={{
                    color: "#C1121F",
                    marginBottom: "12px",
                    letterSpacing: "2px",
                    fontSize: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </p>

                <h3
                  style={{
                    fontSize: "34px",
                    marginBottom: "18px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#D1D1D1",
                    fontSize: "16px",
                    lineHeight: "1.8",
                  }}
                >
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;