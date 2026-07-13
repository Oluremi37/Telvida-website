import "./Portfolio.css";
import { FiLink2 } from "react-icons/fi";

import nlng from "../../assets/portfolio/nlng.jpg";
import nlngLogo1 from "../../assets/portfolio/nlng-logo1.png";
import nlngLogo2 from "../../assets/portfolio/nlng-logo2.png";
import nlngLogo3 from "../../assets/portfolio/nlng-logo3.png";

import uba from "../../assets/portfolio/uba.jpg";
import ubaLogo1 from "../../assets/portfolio/uba-logo1.png";
import ubaLogo2 from "../../assets/portfolio/uba-logo2.png";
import ubaLogo3 from "../../assets/portfolio/uba-logo3.png";

import nbp from "../../assets/portfolio/nbp.jpg";
import nbpLogo1 from "../../assets/portfolio/nbp-logo1.png";
import nbpLogo2 from "../../assets/portfolio/nbp-logo2.png";
import nbpLogo3 from "../../assets/portfolio/nbp-logo3.png";

import uom from "../../assets/portfolio/uom.jpg";
import uomLogo1 from "../../assets/portfolio/uom-logo1.png";
import uomLogo2 from "../../assets/portfolio/uom-logo2.png";
import uomLogo3 from "../../assets/portfolio/uom-logo3.png";

const portfolio = [
  {
    image: nlng,
    logos: [nlngLogo1, nlngLogo2, nlngLogo3],
    tag: "Oil & Gas",
    title: "Nigeria LNG Limited",
    text: "Delivered an integrated video conferencing solution that enables seamless collaboration across meeting rooms and operational teams.",
    result: "Enterprise collaboration successfully deployed",
  },

  {
    image: uba,
    logos: [ubaLogo1, ubaLogo2, ubaLogo3],
    tag: "Banking",
    title: "United Bank of Africa (UBA)",
    text: "Implemented secure unified communication and conferencing solutions to improve collaboration across banking teams and branch offices.",
    result: "100% Installation achieved",
  },

  {
    image: nbp,
    logos: [nbpLogo1, nbpLogo2, nbpLogo3],
    tag: "Manufacturing",
    title: "Nigerian Breweries Plc",
    text: "Modernized workplace communication with enterprise IP telephony and conferencing systems across production and administrative teams.",
    result: "Workspace communication successfully enhanced",
  },

  {
    image: uom,
    logos: [uomLogo1, uomLogo2, uomLogo3],
    tag: "Manufacturing",
    title: "University of Maiduguri",
    text: "Installed modern AV infrastructure supporting executive meeting rooms and collaboration spaces.",
    result: "Successfully delivered",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <span className="portfolio-tag">PORTFOLIO</span>

        <h2 className="portfolio-heading">Our Success Stories</h2>

        <div className="portfolio-grid">
          {[...portfolio, ...portfolio, ...portfolio].map((item, index) => (
            <article className="portfolio-card" key={index}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />

                <span className="industry-tag">{item.tag}</span>
              </div>

              <div className="portfolio-content">
                <div className="client-logos">
                  {item.logos.map((logo, i) => (
                    <img key={i} src={logo} alt="" />
                  ))}
                </div>

                <div className="portfolio-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="portfolio-result">
                  {item.result.toLowerCase().includes("100%") ? (
                    <span className="result-check">✓</span>
                  ) : (
                    <FiLink2 className="result-icon" />
                  )}
                  <span>{item.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
