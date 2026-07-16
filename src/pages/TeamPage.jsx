import "./TeamPage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { teamMembers } from "../data/teamData";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function TeamPage() {
  const md = teamMembers[0];
  const cto = teamMembers[1];
  const management = teamMembers.slice(2);

  return (
    <>
      <Navbar />

      <main className="team-page">
        {/* HERO */}

        <section className="team-hero">
          <div className="team-hero-content">
            <h1>Meet Our Team</h1>

            <p>
              Meet the talented individuals driving innovation, collaboration
              and excellence across our organisation.
            </p>
          </div>
        </section>

        {/* ================= MD ================= */}

        <section className="executive-section">
          <div className="executive-image">
            <img src={md.image} alt={md.name} />
          </div>

          <div className="executive-content">
            <h2>{md.name}</h2>

            <h4>{md.role}</h4>

            <p>{md.bio}</p>

            <div className="social-icons">
              <FaLinkedinIn />

              <FaTwitter />

              <FaFacebookF />

              <FaInstagram />
            </div>
          </div>
        </section>

        {/* ================= CTO ================= */}

        <section className="executive-section reverse">
          <div className="executive-content">
            <h2>{cto.name}</h2>

            <h4>{cto.role}</h4>

            <p>{cto.bio}</p>

            <div className="social-icons">
              <FaLinkedinIn />

              <FaTwitter />

              <FaFacebookF />

              <FaInstagram />
            </div>
          </div>

          <div className="executive-image">
            <img src={cto.image} alt={cto.name} />
          </div>
        </section>

        {/*  MANAGEMENT  */}

        <section className="management">
          <div className="management-top">
            <div>
              <h2>Management Team</h2>
            </div>

            <div>
              <p>
                Get to know the experts who bring passion, creativity and
                experience to everything we do.
              </p>
            </div>
          </div>

          <div className="management-grid">
            {management.map((member) => (
              <div className="management-card" key={member.id}>
                <img src={member.image} alt={member.name} />

                <div className="management-overlay">
                  <h3>{member.name}</h3>

                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
