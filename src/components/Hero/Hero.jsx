import "./Hero.css";
import earth from "../../assets/images/earth.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <ScrollReveal>
        <div className="hero-content">
          <h1>
            Empowering Communication.
            <br />
            Connecting the Future
          </h1>

          <p>
            Telvida Technologies Limited provides cutting edge communication and
            IT solutions designed to help businesses connect, collaborate and grow
            seamlessly.
          </p>

          <a href="#schedule-demo" className="hero-btn">
            Book a Demo
          </a>
        </div>

        <div className="hero-image">
          <img src={earth} alt="Earth" />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
