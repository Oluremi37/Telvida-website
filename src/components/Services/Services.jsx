import { useMemo } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Services.css";

import videoIcon from "../../assets/icons/video.png";
import hardwareIcon from "../../assets/icons/hardware.png";
import phoneIcon from "../../assets/icons/telephone.png";
import communicationIcon from "../../assets/icons/unified.png";
import signageIcon from "../../assets/icons/signage.png";
import analyticsIcon from "../../assets/icons/analytics.png";
import cloudIcon from "../../assets/icons/cloud.png";

import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const services = [
  {
    slug: "video-conferencing",
    icon: videoIcon,
    title: "Video Conferencing",
    description:
      "High quality virtual meeting solutions designed for productivity.",
  },
  {
    slug: "hardware-consumables",
    icon: hardwareIcon,
    title: "Hardwares",
    description:
      "Reliable hardware and IT equipment tailored to support modern business operations.",
  },
  {
    slug: "ip-telephony",
    icon: phoneIcon,
    title: "IP Telephony",
    description:
      "Advanced cloud and IP-based phone systems for efficient business communication.",
  },
  {
    slug: "unified-communication",
    icon: communicationIcon,
    title: "Unified Communication",
    description:
      "Seamless communication solutions that keep teams connected across all platforms.",
  },
  {
    slug: "digital-signage",
    icon: signageIcon,
    title: "Digital Signage",
    description:
      "Smart digital display solutions for real-time advertising and audience engagement.",
  },
  {
    slug: "advance-data-analytics",
    icon: analyticsIcon,
    title: "Advanced Data Analytics",
    description:
      "Transform business data into actionable insights with intelligent analytics solutions.",
  },
  {
    slug: "cloud-computing",
    icon: cloudIcon,
    title: "Cloud Computing",
    description:
      "Secure cloud solutions designed to improve flexibility, storage and business performance.",
  },
];

const Services = () => {
  const autoScroll = useMemo(
    () => AutoScroll({ speed: 0.6, stopOnInteraction: false }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true },
    [autoScroll],
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const pauseAutoScroll = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
  };

  const resumeAutoScroll = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.play();
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <ScrollReveal>
          <div className="services-header">
            <h2>Our Services</h2>

            <p>
              Telvida is a pioneering technology firm dedicated to delivering
              innovative solutions that enhance business efficiency and drive
              growth. Our expertise spans various sectors, providing tailored
              services that meet the unique needs of our clients.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="services-slider-wrapper"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          <div className="services-slider-embla" ref={emblaRef}>
            <div className="services-slider-container">
              {services.map((service, index) => (
                <div className="service-slide" key={index}>
                  <div className="service-card">
                    <div className="service-icon-box">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="service-icon"
                      />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link
                      to={`/services/${service.slug}`}
                      className="learn-more"
                    >
                      <span>Learn more</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-nav">
            <button onClick={scrollPrev} aria-label="Previous service">
              <FaChevronLeft />
            </button>
            <button onClick={scrollNext} aria-label="Next service">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
