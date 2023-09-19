import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";

const API_URL = "https://dummyjson.com/docs/products";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="App">
      <h1>Product Listing Page</h1>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={filterProductsByCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
