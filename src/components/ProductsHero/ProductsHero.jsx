import "./ProductsHero.css";
import heroImage from "../../assets/images/HeroPro-cropped.png";

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-container">
        <div className="products-hero-text">
          <h1>Smart Office Devices</h1>
          <p>
            IP phones, conferencing systems, and collaboration hardware for
            seamless business connectivity.
          </p>
          <button className="demo-btn">Book a Demo</button>
        </div>

        <div className="products-hero-image">
          <img src={heroImage} alt="Smart office devices" />
        </div>
      </div>
    </section>
  );
}
