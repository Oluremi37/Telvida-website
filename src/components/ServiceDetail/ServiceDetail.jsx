import { useParams, Link } from "react-router-dom";
import services from "../../data/services";
import ProductsCatalog from "../ProductsCatalog/ProductsCatalog";
import ProjectCTA from "../ProjectCTA/ProjectCTA";
import { FiCheck } from "react-icons/fi";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>{service.name}</h1>
          <p>{service.heroDescription}</p>
          <a href="#contact" className="service-hero-btn">
            Request Quote
          </a>
        </div>
      </section>

      <section className="service-feature-section">
        <div className="service-feature-container">
          <div className="service-feature-text">
            <span className="service-feature-tag">
              {service.name.toUpperCase()}
            </span>
            <h2>{service.sectionTitle}</h2>
            <p>{service.sectionDescription}</p>

            <ul className="service-checklist">
              {service.checklist.map((item, index) => (
                <li key={index}>
                  <FiCheck className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-feature-image">
            <img src={service.image} alt={service.name} />
          </div>
        </div>
      </section>

      <ProductsCatalog category={service.productCategory} />

      <ProjectCTA />
    </>
  );
}
