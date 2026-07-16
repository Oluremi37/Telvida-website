import "./ContactUs.css";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiHeadphones,
  FiMessageCircle,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";

const features = [
  {
    icon: <FiHeadphones />,
    title: "Talk to an Expert",
    text: "Get personalized solutions for your business.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Quick Response",
    text: "We respond to all inquiries within 24 hours.",
  },
  {
    icon: <FiShield />,
    title: "Trusted Partner",
    text: "Reliable solutions from globally recognized brands.",
  },
  {
    icon: <FiRefreshCw />,
    title: "End-to-End Support",
    text: "From consultation to implementation and ongoing support.",
  },
];

export default function ContactUs() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">VISIT OUR OFFICE</span>
          <h2>Let's Build Better Communication Together</h2>
          <p>
            Whether you're planning a new communication infrastructure,
            upgrading your collaboration tools, or exploring enterprise IT
            solutions, our team is ready to help.
          </p>
        </div>

        <div className="contact-map-wrapper">
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div>
                <h4>Address</h4>
                <p>
                  Plot PC 12, Churchgate street, Victoria Island, Lagos,
                  Nigeria.
                </p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+234 813 380 9668</p>
                <p>+234 808 125 0063</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>info@telvidatechnologies.com</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FiClock />
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="contact-buttons">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Plot+PC+12+Churchgate+Street+Victoria+Island+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-directions"
              >
                Get Directions
              </a>
              <a href="#contact-sales" className="btn-contact-sales">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Churchgate+Street,+Victoria+Island,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-features">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
