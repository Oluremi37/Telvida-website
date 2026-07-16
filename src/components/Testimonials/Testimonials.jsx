import "./Testimonials.css";

const testimonials = [
  {
    text: `"Telvida successfully delivered the deployment of eighteen (18) video conferencing meeting rooms, including the Executive Boardroom, at the New IA Administration Building. From project planning through installation, testing, commissioning, and handover, the team maintained excellent coordination, met project milestones, and delivered a solution that met our operational requirements. Their professionalism, technical competence, and commitment to quality ensured a smooth implementation, and we are pleased with the outcome of the project."`,
    author: " NLNG- IMT32 (New IA Administration Building Project Manager)",
  },
  {
    text: `"Working with Telvida on our video conferencing and network infrastructure projects has been a positive experience. The team demonstrated strong technical expertise, professionalism, and a commitment to delivering quality solutions. Their deployment of modern collaboration technologies has significantly improved the reliability and user experience of our meeting spaces. Telvida's responsiveness, attention to detail, and post-deployment support have made them a trusted technology partner for our operations."`,
    author:
      "NLNG  IMT23 Operations – (Network Infrastructure & Video Conferencing)",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <h2>
          Trusted by 20+ world
          <br />
          class businesses
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p>{item.text}</p>

              <h4>{item.author}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="curve"></div>
    </section>
  );
};

export default Testimonial;
