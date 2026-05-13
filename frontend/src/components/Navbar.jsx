import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navItems = [
    "home",
    "about",
    "services",
    "portfolio",
    "testimonials",
    "contact",
  ];

  return (

    <nav
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 9999,
        padding: "16px 6%",
        background: scrolled
          ? "rgba(0,0,0,0.95)"
          : "rgba(0,0,0,0.45)",
        backdropFilter: "blur(12px)",
        transition: "0.3s",
      }}
    >

      {/* NAV CONTAINER */}

      <div
        style={{
          display: "flex",
          flexDirection:
            window.innerWidth < 992
              ? "column"
              : "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "auto",
          width: "100%",
          gap: window.innerWidth < 992
            ? "18px"
            : "0px",
        }}
      >

        {/* LOGO */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >

          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQG-qwF_rTYJRA/company-logo_200_200/B56Zm6qjUBI4AI-/0/1759773341486?e=2147483647&v=beta&t=QIOhy66fewZzQTP-aWfCc_YC15lNS3AJBK-aviZ-808"
            alt="Outpro Logo"
            style={{
              width: "clamp(42px, 7vw, 56px)",
              height: "clamp(42px, 7vw, 56px)",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />

          <div>

            <h2
              style={{
                color: "white",
                margin: 0,
                fontSize:
                  window.innerWidth < 768
                    ? "20px"
                    : "24px",
                fontWeight: "800",
                lineHeight: "1",
              }}
            >
              OUTPRO.INDIA
            </h2>

            <p
              style={{
                color: "#C1121F",
                margin: 0,
                fontSize:
                  window.innerWidth < 768
                    ? "9px"
                    : "11px",
                letterSpacing: "2px",
                marginTop: "3px",
              }}
            >
              SPORTS • EVENTS
            </p>

          </div>

        </div>

        {/* DESKTOP MENU */}

        <ul
          className="desktop-menu"
          style={{
            display:
              window.innerWidth < 992
                ? "none"
                : "flex",
            gap: "35px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >

          {navItems.map((item) => (

            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActive(item)}
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  fontWeight:
                    active === item
                      ? "700"
                      : "500",
                  borderBottom:"none",
                  paddingBottom: "6px",
                  transition: "0.3s",
                }}
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* CTA BUTTON */}

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
        >

          <button
            className="desktop-btn"
            style={{
              display:
                window.innerWidth < 992
                  ? "none"
                  : "block",
              background: "#C1121F",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Book Consultation
          </button>

</Link>
        {/* MOBILE MENU */}

        {window.innerWidth < 992 && (

          <ul
            style={{
              display: "flex",
              gap: "14px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "500px",
            }}
          >

            {navItems.map((item) => (

              <li key={item}>

                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActive(item)}
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    fontWeight:
                      active === item
                        ? "700"
                        : "500",
                    borderBottom:"none",
                    paddingBottom: "6px",
                    transition: "0.3s",
                    fontSize: "14px",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </Link>

              </li>

            ))}

          </ul>

        )}

      </div>

    </nav>
  );
}

export default Navbar;