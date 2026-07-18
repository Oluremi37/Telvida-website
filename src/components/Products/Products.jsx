import { Link } from "react-router-dom";
import "./Products.css";
import products from "../../data/products";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const featuredProducts = products.slice(0, 3);

export default function Products() {
  return (
    <section className="products-preview-section" id="products">
      <div className="products-preview-container">
        <ScrollReveal>
          <div className="products-preview-header">
            <h2>Products</h2>
            <Link to="/products" className="view-all-link">
              View All Products
            </Link>
          </div>
        </ScrollReveal>

        <div className="products-preview-grid">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <div className="product-card">
                <div className="product-image">
                  <img src={product.thumbnail} alt={product.name} />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="category">{product.shortDescription}</p>

                  <div className="product-buttons">
                    <Link to={`/products/${product.slug}`} className="btn-view">
                      View Details
                    </Link>
                    <Link
                      to="/request-quote"
                      state={{ itemName: product.name, itemType: "product" }}
                      className="btn-quote"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
