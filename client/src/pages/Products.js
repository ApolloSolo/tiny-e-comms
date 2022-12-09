import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";

const Products = () => {
  const userToken = Auth.getToken();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(null);

  let productCategory;
  useEffect(() => {
    productCategory = window.location.pathname.split("/");
    productCategory = productCategory[productCategory.length - 1];
    console.log(productCategory);

    const getAllProducts = async () => {
      const response = await fetch(`/api/products/${productCategory}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      console.log(data);
    };
    getAllProducts();
  }, []);

  return <div>Products</div>;
};

export default Products;
