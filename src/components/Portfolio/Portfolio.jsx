import "./Portfolio.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import portfolioData from "../../data/portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <span className="portfolio-tag">PORTFOLIO</span>

        <h2 className="portfolio-heading">Our Success Stories</h2>

        <div className="portfolio-embla" ref={emblaRef}>
          <div className="portfolio-track">
            {portfolioData.map((project) => (
              <div className="portfolio-slide" key={project.id}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
