import yealinkT34w1 from "../assets/images/products/yealinkT34w1.png";
import dellXps from "../assets/images/products/Dell XPS.png";
import logitechRally from "../assets/images/products/Logitech Rally.png";
import earth from "../assets/images/earth.png";
import boseQuietComfort from "../assets/images/products/Bose QuietComfort.png";
import ciscoKeyboard from "../assets/images/products/CISCO Keyboard.png";
import adastraCF from "../assets/images/products/Adastra-CF.png";

const services = [
  {
    slug: "video-conferencing",
    name: "Video Conferencing",
    menuDescription:
      "High quality virtual meeting solutions designed for productivity.",
    heroDescription:
      "Enterprise-grade virtual meeting solutions that enable seamless collaboration, crystal-clear communication, and productive hybrid work experiences.",
    sectionTitle: "Enterprise video conferencing, built for clarity.",
    sectionDescription:
      "High-quality HD meetings that keep your teams aligned — whether they're across the office or across the globe.",
    checklist: ["Crystal Clear Audio", "Secure & Safe Calls"],
    image: logitechRally,
    productCategory: "Video Conferencing",
  },
  {
    slug: "hardware-consumables",
    name: "Hardware & Consumable",
    menuDescription:
      "Reliable hardware and IT equipment tailored to support modern businesses.",
    heroDescription:
      "Reliable IT hardware, accessories, and business technology equipment tailored to support modern workplace operations.",
    sectionTitle: "Quality Products for your business needs",
    sectionDescription:
      "Reliable IT hardware, accessories, and business technology equipment tailored to support modern workplace operations.",
    checklist: [
      "Enterprise-grade devices and accessories",
      "Quality supplies and restocking for everyday operations",
      "Trusted solutions backed by warranty",
    ],
    image: dellXps,
    productCategory: "Laptops & Desktops",
  },
  {
    slug: "ip-telephony",
    name: "IP Telephony",
    menuDescription:
      "Advanced cloud and IP based phone systems for efficient and scalable business communication.",
    heroDescription:
      "Advanced cloud and IP-based phone systems built to improve communication efficiency, scalability, and connectivity.",
    sectionTitle: "Modern IP Telephony for Smarter Teams",
    sectionDescription:
      "Enable seamless business communication with secure, cloud-ready solutions built for modern workplaces.",
    checklist: [
      "HD voice calls with enterprise reliability",
      "Easy integration with existing business systems",
      "Scalable solutions for remote and office teams",
    ],
    image: yealinkT34w1,
    productCategory: "IP Telephony",
  },
  {
    slug: "unified-communication",
    name: "Unified Communication",
    menuDescription:
      "High quality virtual meeting solutions designed for productivity.",
    heroDescription:
      "High quality virtual meeting solutions designed for productivity.",
    sectionTitle: "Unified Communication for Connected Teams",
    sectionDescription:
      "Bring calls, messaging, and meetings into one seamless platform built for hybrid collaboration.",
    checklist: [
      "One platform for calls, chat, and meetings",
      "Consistent experience across devices",
      "Built for hybrid and remote teams",
    ],
    image: boseQuietComfort,
    productCategory: null,
  },
  {
    slug: "digital-signage",
    name: "Digital Signage",
    menuDescription:
      "Smart digital display solutions for real-time advertising and audience engagement.",
    heroDescription:
      "Smart digital display solutions for real-time advertising and audience engagement.",
    sectionTitle: "Digital Signage That Captures Attention",
    sectionDescription:
      "Deploy dynamic content across your locations with signage solutions built for real-time updates.",
    checklist: [
      "Real-time content updates across displays",
      "Remote management from a single dashboard",
      "Built for retail, office, and public spaces",
    ],
    image: ciscoKeyboard,
    productCategory: null,
  },
  {
    slug: "advance-data-analytics",
    name: "Advanced Data Analytics",
    menuDescription:
      "Transform business data into actionable insights with intelligent analytics.",
    heroDescription:
      "Transform business data into actionable insights with intelligent analytics.",
    sectionTitle: "Turn Data Into Decisions",
    sectionDescription:
      "Intelligent analytics tools that surface the insights that matter, so your team can act faster.",
    checklist: [
      "Real-time dashboards and reporting",
      "Custom insights tailored to your business",
      "Secure, scalable data infrastructure",
    ],
    image: adastraCF,
    productCategory: null,
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing",
    menuDescription:
      "Secure and scalable cloud solutions designed to improve flexibility, storage and business performance.",
    heroDescription:
      "Secure and scalable cloud solutions designed to improve flexibility, storage, and business performance.",
    sectionTitle: "Cloud Infrastructure Built to Scale",
    sectionDescription:
      "Flexible, secure cloud solutions that grow with your business, without the overhead of managing it yourself.",
    checklist: [
      "Elastic storage and compute resources",
      "Enterprise-grade security and uptime",
      "Predictable, scalable pricing",
    ],
    image: earth,
    productCategory: null,
  },
];

export default services;
