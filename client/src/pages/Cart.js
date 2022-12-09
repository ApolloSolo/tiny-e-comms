import { useContext } from "react";
import CartTable from "../components/CartTable";
import CartContext from "../context/CartContext";
import { useEffect } from "react";

const Cart = () => {
  const { getTotalPrice } = useContext(CartContext);

  useEffect(() => {
    getTotalPrice();
  });

  return (
    <div>
      <CartTable />
    </div>
  );
};

export default Cart;
