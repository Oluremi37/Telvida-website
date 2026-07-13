import "./Team.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import manager from "../../assets/images/manager.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import team5 from "../../assets/images/team5.png";
import team6 from "../../assets/images/team6.png";
import team7 from "../../assets/images/team7.png";

const members = [
  {
    image: manager,
    name: "Wemimo Oluwalade",
    position: "Managing Director",
    ceo: true,
    imageClass: "center",
  },
  {
    image: team1,
    name: "Team Member 1",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team2,
    name: "Team Member 2",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team3,
    name: "Team Member 3",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team4,
    name: "Team Member 4",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team5,
    name: "Team Member 5",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team6,
    name: "Team Member 6",
    position: "Position",
    imageClass: "center",
  },
  {
    image: team7,
    name: "Team Member 7",
    position: "Position",
    imageClass: "center",
  },
];

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-header">
          <div>
            <span>MEET THE TEAM</span>
            <h2>Management Team</h2>
          </div>

          <Link to="/team" className="view-all">
            View all team members
            <FaArrowRight />
          </Link>
        </div>

        <div className="team-grid">
          {members.map((member, index) => (
            <div
              key={index}
              className={`team-card ${member.ceo ? "ceo-card" : ""}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className={`team-image ${member.imageClass}`}
              />

              <div className="team-overlay">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
