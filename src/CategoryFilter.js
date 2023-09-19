import React from "react";

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "Laptop", "Headphones", "Other"];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
