import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import "./ProductsCatalog.css";
import products from "../../data/products";

const brands = ["All Brands", ...new Set(products.map((p) => p.brand))];

export default function ProductsCatalog() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (selectedBrand !== "All Brands") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    switch (sortBy) {
      case "priceLowHigh":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "nameAZ":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "popular":
      default:
        result = [...result].sort((a, b) => b.popularity - a.popularity);
        break;
    }

    return result;
  }, [search, selectedBrand, sortBy]);

  return (
    <section className="products-catalog-section" id="products">
      <div className="products-catalog-container">
        <div className="products-catalog-header">
          <h2>
            Products{" "}
            <span className="products-count">
              ({filteredProducts.length} products)
            </span>
          </h2>

          <div className="products-controls">
            <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search Products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="select-wrapper">
              <select
                className="filter-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <FiChevronDown className="select-chevron" />
            </div>

            <div className="select-wrapper">
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Sort by: Popular</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="nameAZ">Name: A-Z</option>
              </select>
              <FiChevronDown className="select-chevron" />
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="no-results">No products match your search.</p>
        ) : (
          <div className="products-catalog-grid">
            {filteredProducts.map((product) => (
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
        )}
      </div>
    </section>
  );
}
