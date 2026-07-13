import "./Testimonials.css";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet consectetur. Phasellus mattis euismod ut at enim est tincidunt etiam tempor. Lacus dolor interdum morbi urna turpis viverra ac ornare."`,
    author: "NLNG",
  },
  {
    text: `"Lorem ipsum dolor sit amet consectetur. Phasellus mattis euismod ut at enim est tincidunt etiam tempor. Lacus dolor interdum morbi urna turpis viverra ac ornare."`,
    author: "TotalEnergies",
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
