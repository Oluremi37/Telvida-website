import "./About.css";
import missionIcon from "../../assets/icons/mission.png";
import visionIcon from "../../assets/icons/vision.png";
import valuesIcon from "../../assets/icons/values.png";
import logitech from "../../assets/images/logitech.png";
import cisco from "../../assets/images/cisco.png";
import poly from "../../assets/images/poly.png";
import huawei from "../../assets/images/huawei.png";
import avaya from "../../assets/images/avaya.png";
import microsoft from "../../assets/images/microsoft.png";
import ibm from "../../assets/images/ibm.png";
import dell from "../../assets/images/dell.png";
import samsung from "../../assets/images/samsung.png";

const aboutData = [
  {
    title: "Mission",
    icon: missionIcon,
    background: "#FDECEC",
    description:
      "Connect people and communities by bringing technology and human needs, ensuring every customer's communication needs are met with innovation and accessibility.",
  },
  {
    title: "Vision",
    icon: visionIcon,
    background: "#EAF8EA",
    description:
      "To become a world class telecommunications company connecting people and businesses across borders and enabling seamless global communication.",
  },
  {
    title: "Core Values",
    icon: valuesIcon,
    background: "#FFF4E8",
    values: [
      "Integrity and Honesty",
      "Expertise",
      "Passion",
      "Boldness",
      "Self critical",
      "Accountability",
    ],
  },
];
const partners = [
  logitech,
  cisco,
  poly,
  huawei,
  avaya,
  microsoft,
  ibm,
  dell,
  samsung,
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <h2>About Us</h2>

          <p>
            We deliver flexible and affordable communication solutions that help
            businesses connect and collaborate seamlessly.
          </p>
        </div>

        <div className="about-grid">
          {aboutData.map((item) => (
            <div className="about-card" key={item.title}>
              <div
                className="icon-box"
                style={{ backgroundColor: item.background }}
              >
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>

              {item.description ? (
                <p>{item.description}</p>
              ) : (
                <ul>
                  {item.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="partners">
          <h2>Partners</h2>

          <p>
            Partnering with global technology leaders to deliver innovative,
            secure and scalable communication solutions.
          </p>

          <div className="partners-grid">
            {partners.map((logo, index) => (
              <img key={index} src={logo} alt={`Partner ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;