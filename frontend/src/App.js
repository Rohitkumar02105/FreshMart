import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>FreshMart 🛒</h1>
      <h2>Products</h2>

      {products.map((item, index) => (
        <div key={index} className="product-card">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;