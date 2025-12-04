import React, { useState, useEffect } from "react";
import productsData from "../data/products.json"; // JSON с товарами

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Все");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = category === "Все"
    ? products
    : products.filter(p => p.category === category);

  const categories = ["Все", ...new Set(products.map(p => p.category))];

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h2>Список товаров</h2>

      <div style={{ marginBottom: 20 }}>
        <label>Категория: </label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.map(p => (
          <li key={p.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10, borderRadius: 5 }}>
            <h3>{p.name}</h3>
            <p>Категория: {p.category}</p>
            <p>Цена: ${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
