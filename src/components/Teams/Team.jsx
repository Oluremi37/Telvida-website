import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { teamMembers } from "../../data/teamData";

export default function Team() {
  const previewMembers = teamMembers.filter((member) => member.preview);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === previewMembers.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [isPaused, previewMembers.length]);

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

        <div
          className="team-slider"
          onMouseLeave={() => {
            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
              setIsPaused(false);
            }, 1000);
          }}
        >
          {previewMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-item ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => {
                clearTimeout(timeoutRef.current);
                setIsPaused(true);
                setActiveIndex(index);
              }}
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
