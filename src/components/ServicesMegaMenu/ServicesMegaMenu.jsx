import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../../data/services";
import "./ServicesMegaMenu.css";

export default function ServicesMegaMenu({ onLinkClick }) {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="services-mega-menu">
      <div className="mega-menu-content">
        {/* LEFT COLUMN */}
        <div className="mega-column">
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`mega-item ${
                activeService.slug === service.slug ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService(service)}
              onClick={onLinkClick}
            >
              <div className="mega-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mega-text">
                <h4>{service.name}</h4>
                <p>{service.menuDescription}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div className="mega-column">
          {services.slice(3, 6).map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`mega-item ${
                activeService.slug === service.slug ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService(service)}
              onClick={onLinkClick}
            >
              <div className="mega-number">
                {String(index + 4).padStart(2, "0")}
              </div>

              <div className="mega-text">
                <h4>{service.name}</h4>
                <p>{service.menuDescription}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="mega-preview-column">
          <Link
            to={`/services/${services[6].slug}`}
            className={`mega-item ${
              activeService.slug === services[6].slug ? "active" : ""
            }`}
            onMouseEnter={() => setActiveService(services[6])}
            onClick={onLinkClick}
          >
            <div className="mega-number">07</div>

            <div className="mega-text">
              <h4>{services[6].name}</h4>
              <p>{services[6].menuDescription}</p>
            </div>
          </Link>

          <div className="mega-preview">
            <img
              src={activeService.image}
              alt={activeService.name}
              className="mega-preview-image"
            />

            <div className="mega-preview-content">
              <h4>{activeService.name}</h4>

              <p>{activeService.heroDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
