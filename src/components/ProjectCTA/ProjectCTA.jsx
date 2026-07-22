import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./ProjectCTA.css";

export default function ProjectCTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    consultationType: "In-Person Meeting",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Schedule Discussion form submitted:", formData);
    // TODO: wire up to backend/email service later
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      date: "",
      consultationType: "In-Person Meeting",
    });
    setIsSubmitted(false);
  };

  return (
    <section className="project-cta-section" id="schedule-demo">
      <ScrollReveal>
        <div className="project-cta-container">
          <div className="project-cta-left">
            <h2>Talk to us about your project</h2>
            <p>
              We're ready to help you bring your ideas to life with reliable
              telecom and IT solutions tailored to your business needs. Schedule
              a discussion with our team at your convenience.
            </p>

            <div className="project-cta-divider" />

            <h4>Need assistance with your booking?</h4>
            <p className="project-cta-subtext">You can contact us on :</p>
            <p className="project-cta-contact">
              +234 813 380 9668, 0808 125 0063
            </p>
            <p className="project-cta-contact">info@telvidatechnologies.com</p>
          </div>

          <div className="project-cta-right">
            {isSubmitted ? (
              <div className="thank-you-card">
                <div className="thank-you-icon">
                  <FiCheck />
                </div>

                <h3>Thank You!</h3>
                <p className="thank-you-subtitle">
                  Your Consultation request has been received
                </p>

                <p className="thank-you-body">
                  Our team will review your request and contact you within 24
                  hours to confirm your preferred time
                </p>

                <button className="reset-btn" onClick={handleReset}>
                  Schedule Another Meeting
                </button>
              </div>
            ) : (
              <form className="schedule-form" onSubmit={handleSubmit}>
                <h3>Schedule Discussion</h3>

                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name here"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Yourname@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="date">When you free?</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="consultationType">
                  Preferred consultation type
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                >
                  <option value="In-Person Meeting">In-Person Meeting</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Video Call">Video Call</option>
                </select>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
