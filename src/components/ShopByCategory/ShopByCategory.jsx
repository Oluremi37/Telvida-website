import "./ShopByCategory.css";
import {
  FiPhone,
  FiVideo,
  FiMonitor,
  FiPrinter,
  FiTv,
  FiHeadphones,
} from "react-icons/fi";

const categories = [
  { icon: <FiPhone />, name: "IP Telephony", count: 125 },
  { icon: <FiVideo />, name: "Video Conferencing", count: 200 },
  { icon: <FiMonitor />, name: "Laptops & Desktops", count: 180 },
  { icon: <FiPrinter />, name: "Printers", count: 150 },
  { icon: <FiTv />, name: "Digital Signage", count: 170 },
  { icon: <FiHeadphones />, name: "Audio & Headset", count: 130 },
];

export default function ShopByCategory({ onSelectCategory }) {
  return (
    <section className="shop-category-section">
      <div className="shop-category-container">
        <div className="shop-category-header">
          <h2>Shop by Category</h2>
          <p>
            Browse products by category to quickly find the perfect solution for
            your business.
          </p>
        </div>

        <div className="shop-category-grid">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="category-card"
              onClick={() => onSelectCategory?.(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <h4>{cat.name}</h4>
              <p>{cat.count} Products</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
