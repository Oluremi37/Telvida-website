import { useEffect, useState } from "react";
import { FiLink2 } from "react-icons/fi";
import "./PortfolioCard.css";

export default function PortfolioCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <article className="portfolio-card">
      {/* BIG IMAGE */}

      <div className="portfolio-image">
        <img src={project.images[activeImage]} alt={project.title} />

        <span className="industry-tag">{project.tag}</span>
      </div>

      {/* THUMBNAILS */}

      <div className="portfolio-thumbnails">
        {project.images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={activeImage === index + 1 ? "active" : ""}
            onClick={() => setActiveImage(index + 1)}
          />
        ))}
      </div>

      {/* CONTENT */}

      <div className="portfolio-content">
        <div className="portfolio-text">
          <h3>{project.title}</h3>

          <p>{project.text}</p>
        </div>

        <div className="portfolio-result">
          {project.result.includes("100%") ? (
            <span className="result-check">✓</span>
          ) : (
            <FiLink2 className="result-icon" />
          )}

          <span>{project.result}</span>
        </div>
      </div>
    </article>
  );
}
