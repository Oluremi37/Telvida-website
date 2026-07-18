import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FiCheck } from "react-icons/fi";
import "./RequestQuote.css";

export default function RequestQuote() {
  const location = useLocation();

  const itemName = location.state?.itemName || "";
  const itemType = location.state?.itemType || "";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    itemName: itemName,
    quantity: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // TODO: wire up to backend/email service later
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      itemName: "",
      quantity: "",
      budget: "",
      timeline: "",
      details: "",
    });
    setIsSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <section className="request-quote-section">
        <div className="request-quote-container">
          {isSubmitted ? (
            <div className="quote-thank-you">
              <div className="quote-thank-you-icon">
                <FiCheck />
              </div>
              <h2>Thank You!</h2>
              <p className="quote-thank-you-subtitle">
                Your quote request has been received
              </p>
              <p className="quote-thank-you-body">
                Our team will review your request and get back to you within 24
                hours with pricing and next steps.
              </p>

              <div className="quote-thank-you-actions">
                <button className="btn-outline" onClick={handleReset}>
                  Request Another Quote
                </button>
                <Link to="/" className="btn-filled">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="request-quote-header">
                <span className="request-quote-tag">GET A QUOTE</span>
                <h1>Request a Quote</h1>
                <p>
                  Tell us what you need and our team will get back to you with
                  pricing and availability.
                </p>
              </div>

              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="quote-form-row">
                  <div className="quote-form-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="quote-form-field">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Your company (optional)"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="quote-form-row">
                  <div className="quote-form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="quote-form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234 000 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="quote-form-field">
                  <label htmlFor="itemName">
                    {itemType === "service"
                      ? "Service you're interested in"
                      : "Product you're interested in"}
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder="e.g. Dell XPS 14, or IP Telephony"
                    value={formData.itemName}
                    onChange={handleChange}
                  />
                </div>

                <div className="quote-form-row">
                  {itemType !== "service" && (
                    <div className="quote-form-field">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="e.g. 5"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="quote-form-field">
                    <label htmlFor="budget">Budget Range (optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-2000">$500 - $2,000</option>
                      <option value="2000-10000">$2,000 - $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="quote-form-field">
                    <label htmlFor="timeline">Timeline (optional)</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select a timeline</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-4-weeks">1-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="just-exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div className="quote-form-field">
                  <label htmlFor="details">Additional details</label>
                  <textarea
                    id="details"
                    name="details"
                    placeholder="Tell us more about what you need..."
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="quote-submit-btn">
                  Submit Request
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
