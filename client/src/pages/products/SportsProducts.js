import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Auth from "../../utils/auth";

const SportsProducts = () => {
  const userToken = Auth.getToken();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch(`/api/products/sports`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      setProducts(data.data);
      setLoading(false);
    };
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {
        loading ? (<p>Loading...</p>) : (
          products.map((product, index) => (
            <ProductCard product={product} key={index}/>
          ))
        )
      }
    </div>
  );
};

export default SportsProducts;
