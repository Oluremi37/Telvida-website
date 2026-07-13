import "./Services.css";

import videoIcon from "../../assets/icons/video.png";
import hardwareIcon from "../../assets/icons/hardware.png";
import phoneIcon from "../../assets/icons/telephone.png";
import communicationIcon from "../../assets/icons/unified.png";
import signageIcon from "../../assets/icons/signage.png";
import analyticsIcon from "../../assets/icons/analytics.png";
import cloudIcon from "../../assets/icons/cloud.png";

import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    icon: videoIcon,
    title: "Video Conferencing",
    description:
      "High quality virtual meeting solutions designed for productivity.",
  },
  {
    icon: hardwareIcon,
    title: "Hardwares",
    description:
      "Reliable hardware and IT equipment tailored to support modern business operations.",
  },
  {
    icon: phoneIcon,
    title: "IP Telephony",
    description:
      "Advanced cloud and IP-based phone systems for efficient business communication.",
  },
  {
    icon: communicationIcon,
    title: "Unified Communication",
    description:
      "Seamless communication solutions that keep teams connected across all platforms.",
  },
  {
    icon: signageIcon,
    title: "Digital Signage",
    description:
      "Smart digital display solutions for real-time advertising and audience engagement.",
  },
  {
    icon: analyticsIcon,
    title: "Advanced Data Analytics",
    description:
      "Transform business data into actionable insights with intelligent analytics solutions.",
  },
  {
    icon: cloudIcon,
    title: "Cloud Computing",
    description:
      "Secure cloud solutions designed to improve flexibility, storage and business performance.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>

          <p>
            Telvida is a pioneering technology firm dedicated to delivering
            innovative solutions that enhance business efficiency and drive
            growth. Our expertise spans various sectors, providing tailored
            services that meet the unique needs of our clients.
          </p>
        </div>

        <div className="services-slider">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-box">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#" className="learn-more">
                <span>Learn more</span>
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
