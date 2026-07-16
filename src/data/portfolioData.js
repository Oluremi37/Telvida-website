import nlng1 from "../assets/portfolio/nlng/nlng.jpg";
import nlng2 from "../assets/portfolio/nlng/nlng-logo1.png";
import nlng3 from "../assets/portfolio/nlng/nlng-logo2.png";
import nlng4 from "../assets/portfolio/nlng/nlng-logo3.png";

// UBA
import uba1 from "../assets/portfolio/uba/uba.jpg";
import uba2 from "../assets/portfolio/uba/uba-logo1.png";
import uba3 from "../assets/portfolio/uba/uba-logo2.png";
import uba4 from "../assets/portfolio/uba/uba-logo3.png";

// NBP
import nb1 from "../assets/portfolio/nbp/nbp.jpg";
import nb2 from "../assets/portfolio/nbp/nbp-logo1.png";
import nb3 from "../assets/portfolio/nbp/nbp-logo2.png";
import nb4 from "../assets/portfolio/nbp/nbp-logo3.png";

// UOM
import uom1 from "../assets/portfolio/uom/uom.jpg";
import uom2 from "../assets/portfolio/uom/uom-logo1.png";
import uom3 from "../assets/portfolio/uom/uom-logo2.png";
import uom4 from "../assets/portfolio/uom/uom-logo3.png";

const portfolioData = [
  {
    id: 1,
    tag: "Oil & Gas",
    title: "Nigeria LNG Limited",

    images: [nlng1, nlng2, nlng3, nlng4],

    text: "Delivered an integrated video conferencing solution that enables seamless collaboration across meeting rooms and operational teams.",

    result: "Enterprise collaboration successfully deployed",
  },

  {
    id: 2,

    tag: "Banking",

    title: "United Bank of Africa (UBA)",

    images: [uba1, uba2, uba3, uba4],

    text: "Implemented secure unified communication and conferencing solutions to improve collaboration across banking teams and branch offices.",

    result: "100% Installation achieved",
  },

  {
    id: 3,

    tag: "Manufacturing",

    title: "Nigerian Breweries Plc",

    images: [nb1, nb2, nb3, nb4],

    text: "Modernized workplace communication with enterprise IP telephony and conferencing systems across production and administrative teams.",

    result: "Workspace communication successfully enhanced",
  },

  {
    id: 4,

    tag: "Education",

    title: "University of Maiduguri",

    images: [uom1, uom2, uom3, uom4],

    text: "Installed modern AV infrastructure supporting executive meeting rooms and collaboration spaces.",

    result: "Successfully delivered",
  },
];

export default portfolioData;
