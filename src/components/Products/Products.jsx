import { Link } from "react-router-dom";
import "./Products.css";
import products from "../../data/products";

const featuredProducts = products.slice(0, 3);

export default function Products() {
  return (
    <section className="products-preview-section" id="products">
      <div className="products-preview-container">
        <div className="products-preview-header">
          <h2>Products</h2>
          <Link to="/products" className="view-all-link">
            View All Products
          </Link>
        </div>

        <div className="products-preview-grid">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
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
                  <button className="btn-quote">Request Quote</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
