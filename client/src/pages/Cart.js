import { useContext, useState, useEffect } from "react";
import CartTable from "../components/CartTable";
import CartContext from "../context/CartContext";
import Auth from "../utils/auth";

const Cart = () => {
  const userToken = Auth.getToken();
  const { items, getTotalPrice, totalPrice } = useContext(CartContext);
  const [submitProdError, setSubmitProdError] = useState(null);

  useEffect(() => {
    getTotalPrice();
  });

  const saveUserPurchase = async () => {
    try {
      const response = await fetch("/api/orders/purchases/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify(items)
      });

      const data = await response.json();

      if (data.error) {
        console.log(data);
        throw new Error(data.error);
      }

      console.log(data);
      if (response.ok) {
        console.log("User Purchase was saved!");
      } else throw new Error(data.error);
    } catch (error) {
      console.log(error);
      setSubmitProdError(error.message);
    }
  };

  const handleCheckout = async e => {
    e.preventDefault();
    try {
      const response = await fetch("/process/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify(items)
      });
      const data = await response.json();

      if (data.error) {
        console.log(data);
        throw new Error(data.error);
      }

      console.log(data);
      if (response.ok) {
        window.location.assign(data.url);
        await saveUserPurchase();
      } else throw new Error(data.error);
    } catch (error) {
      setSubmitProdError(error.message);
    }
  };

  return (
    <div>
      <CartTable />
      <div>
        <p>
          {totalPrice}
        </p>
        <button onClick={handleCheckout} className="border-2">
          Checkout
        </button>
      </div>
      {submitProdError
        ? <p>
            {submitProdError}
          </p>
        : false}
    </div>
  );
};

export default Cart;
