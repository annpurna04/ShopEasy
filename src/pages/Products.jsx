import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import allProducts from "../data/products";
import Pagination from "../components/Pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const prices = allProducts.map((p) => p.price);
  const minPrice = 0;
  const maxPrice = Math.max(...prices) +10000;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // filtering
  const filtered = allProducts.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sorted.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // 400ms delay
    return () => clearTimeout(timer);
  }, [category, sortOrder, priceRange, currentPage]);

  return (
    <div className="products-page">
      <h2>Explore Products</h2>
      <div className="products-layout">
        {/* Sidebar */}
        <div className="filter-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <label>Category</label>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
              value={category}
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <div className="filter-group">
            <label>
              Price Range:{" "}
              <span>
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </span>
            </label>
            <Slider
              range
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={(val) => {
                setPriceRange(val);
                setCurrentPage(1);
              }}
              trackStyle={[{ backgroundColor: "#5C5C99" }]}
              handleStyle={[
                { borderColor: "#5C5C99", backgroundColor: "#fff" },
                { borderColor: "#5C5C99", backgroundColor: "#fff" },
              ]}
              railStyle={{ backgroundColor: "#ddd" }}
            />
          </div>

          <button
            className="clear-btn"
            onClick={() => {
              setCategory("All");
              setSortOrder("");
              setPriceRange([minPrice, maxPrice]);
              setCurrentPage(1);
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* Right Content */}
        <div className="products-content">
          <div className="products-header">
            <div className="results-count">
              Showing {currentProducts.length} of {sorted.length} results
            </div>
            <div className="sort-bar">
              <select
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1);
                }}
                value={sortOrder}
              >
                <option value="">Sort by Price</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>

          {/* Loader or Product List */}
          <div className="products-body">
            {loading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
              </div>
            )}

            <div className={`product-list ${loading ? "blurred" : ""}`}>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
