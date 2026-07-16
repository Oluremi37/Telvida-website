import { Link } from "react-router-dom";
import services from "../../data/services";
import megaMenuAdImage from "../../assets/images/products/Logitech Rally.png";
import "./ServicesMegaMenu.css";

export default function ServicesMegaMenu({ onLinkClick }) {
  return (
    <div className="services-mega-menu">
      <div className="mega-menu-column">
        {services.slice(0, 3).map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="mega-menu-item"
            onClick={onLinkClick}
          >
            <span className="mega-menu-number">{index + 1}</span>
            <div className="mega-menu-text">
              <h4>{service.name}</h4>
              <p>{service.menuDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mega-menu-column">
        {services.slice(3, 6).map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="mega-menu-item"
            onClick={onLinkClick}
          >
            <span className="mega-menu-number">{index + 4}</span>
            <div className="mega-menu-text">
              <h4>{service.name}</h4>
              <p>{service.menuDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mega-menu-column mega-menu-promo-column">
        {services.slice(6, 7).map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="mega-menu-item"
            onClick={onLinkClick}
          >
            <span className="mega-menu-number">7</span>
            <div className="mega-menu-text">
              <h4>{service.name}</h4>
              <p>{service.menuDescription}</p>
            </div>
          </Link>
        ))}

        <div className="mega-menu-ad">
          <img src={megaMenuAdImage} alt="Telvida solutions" />
          <h4>Ad main text</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
      </div>
    </div>
  );
}
