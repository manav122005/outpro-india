import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert("Enquiry Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section
      id="contact"
      style={{
        background: "#050505",
        color: "white",
        padding: "120px 8%",
      }}
    >

      <div
        style={{
          maxWidth: "1350px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >

        {/* LEFT SIDE */}

        <div>

          <p
            style={{
              color: "#C1121F",
              letterSpacing: "4px",
              fontWeight: "600",
              marginBottom: "18px",
              fontSize: "14px",
            }}
          >
            CONTACT US
          </p>

          <h2
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: "800",
              lineHeight: "1.15",
              marginBottom: "30px",
            }}
          >
          Let’s Build Your{" "}
          <span style={{ color: "#C1121F" }}>
            Next Big Experience
          </span>
          </h2>
          <p
            style={{
              color: "#BDBDBD",
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "45px",
              maxWidth: "600px",
            }}
          >
            Connect with Outpro.India for sports events,
            brand activations, collaborations, and
            unforgettable audience experiences.
          </p>

          {/* CONTACT INFO */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >

            {/* EMAIL */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >

              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(193,18,31,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C1121F",
                  fontSize: "24px",
                }}
              >
                <FaEnvelope />
              </div>

              <div>

                <h4
                  style={{
                    margin: 0,
                    marginBottom: "8px",
                    fontSize: "22px",
                  }}
                >
                  Email
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#BDBDBD",
                    fontSize: "17px",
                  }}
                >
                  outpro.india@gmail.com
                </p>

              </div>

            </div>

            {/* LOCATION */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >

              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(193,18,31,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C1121F",
                  fontSize: "24px",
                }}
              >
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4
                  style={{
                    margin: 0,
                    marginBottom: "8px",
                    fontSize: "22px",
                  }}
                >
                  Location
                </h4>

                <a
                  href="https://www.google.com/maps/place/Jaipur,+Rajasthan,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    margin: 0,
                    color: "#BDBDBD",
                    fontSize: "17px",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#C1121F";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#BDBDBD";
                  }}
                >
                  Jaipur, Rajasthan, India
                </a>

              </div>

            </div>

            {/* PHONE */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >

              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "18px",
                  background: "rgba(193,18,31,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C1121F",
                  fontSize: "24px",
                }}
              >
                <FaPhoneAlt />
              </div>

              <div>

                <h4
                  style={{
                    margin: 0,
                    marginBottom: "8px",
                    fontSize: "22px",
                  }}
                >
                  Contact
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#BDBDBD",
                    fontSize: "17px",
                  }}
                >
                  +91 89572 39847
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#111",
            padding: "50px",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="company"
            placeholder="Organization / Company"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Tell us about your event or collaboration..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#C1121F",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Submit Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "22px",
  background: "#1A1A1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "14px",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

export default Contact;