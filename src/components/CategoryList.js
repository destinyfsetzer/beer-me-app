import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  // map over categories array
  const renderedList = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });

  return <ul className="categories">{renderedList}</ul>;
};

export default CategoryList;
