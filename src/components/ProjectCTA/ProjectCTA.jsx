import { useState } from "react";
import "./ProjectCTA.css";

export default function ProjectCTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    consultationType: "In-Person Meeting",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Schedule Discussion form submitted:", formData);
    // TODO: wire up to backend/email service later
  };

  return (
    <section className="project-cta-section">
      <div className="project-cta-container">
        <div className="project-cta-left">
          <h2>Talk to us about your project</h2>
          <p>
            We're ready to help you bring your ideas to life with reliable
            telecom and IT solutions tailored to your business needs. Schedule a
            discussion with our team at your convenience.
          </p>

          <div className="project-cta-divider" />

          <h4>Need assistance with your booking?</h4>
          <p className="project-cta-subtext">You can contact us on :</p>
          <p className="project-cta-contact">
            +234 813 380 9668, 0808 125 0063
          </p>
          <p className="project-cta-contact">info@ng.telvida.com</p>
        </div>

        <div className="project-cta-right">
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
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Yourname@mail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="date">When you free?</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="dd/mm/yyyy"
              value={formData.date}
              onChange={handleChange}
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
        </div>
      </div>
    </section>
  );
}
