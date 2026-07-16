import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { teamMembers } from "../../data/teamData";

export default function Team() {
  const previewMembers = teamMembers.filter((member) => member.preview);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === previewMembers.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [previewMembers.length]);

  return (
    <section className="team">
      <div className="team-container">
        <div className="team-top">
          <div>
            <span className="team-small-title">OUR PROFESSIONALS</span>

            <h2>Meet Our Team</h2>

            <p>
              Meet the passionate professionals driving innovation,
              collaboration and excellence across our organisation.
            </p>
          </div>

          <Link to="/team" className="view-team">
            View Team
          </Link>
        </div>

        <div className="team-slider">
          {previewMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-item ${activeIndex === index ? "active" : ""}`}
            >
              <img src={member.image} alt={member.name} />

              <div className="team-content">
                <div>
                  <h3>{member.name}</h3>

                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}