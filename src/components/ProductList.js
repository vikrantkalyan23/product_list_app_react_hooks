import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>Price: ${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
