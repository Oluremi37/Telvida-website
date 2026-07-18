import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import products from "../../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  const handleRequestQuote = () => {
    navigate("/request-quote", {
      state: { itemName: product.name, itemType: "product" },
    });
  };
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="product-not-found">
          <h2>Product not found</h2>
          <Link to="/products">Back to Products</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="product-detail-section">
        <div className="product-detail-container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span>{" "}
            <Link to="/products">Products</Link> <span>/</span>{" "}
            <Link to="/products">{product.category}</Link> <span>/</span>{" "}
            <span className="current">{product.name}</span>
          </div>

          <div className="product-detail-grid">
            <div className="product-detail-images">
              <div className="main-image">
                <img src={product.gallery[activeImage]} alt={product.name} />
              </div>

              {product.gallery.length > 1 && (
                <div className="thumbnail-row">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${
                        activeImage === index ? "active" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="product-detail-info">
              <h1>{product.name}</h1>

              <h4>Description</h4>
              <p className="product-description">{product.description}</p>

              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="product-detail-buttons">
                <button className="btn-quote" onClick={handleRequestQuote}>
                  Request Quote
                </button>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h3>Related Products</h3>

              <div className="related-products-grid">
                {relatedProducts.map((related) => (
                  <div className="product-card" key={related.id}>
                    <div className="product-image">
                      <img src={related.thumbnail} alt={related.name} />
                    </div>

                    <div className="product-content">
                      <h3>{related.name}</h3>
                      <p className="category">{related.shortDescription}</p>

                      <div className="product-buttons">
                        <Link
                          to={`/products/${related.slug}`}
                          className="btn-view"
                        >
                          View Details
                        </Link>
                        <button className="btn-quote">Request Quote</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
