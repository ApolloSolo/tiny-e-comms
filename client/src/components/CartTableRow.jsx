import { useContext } from "react";
import CartContext from "../context/CartContext";
import {FaSkullCrossbones} from "react-icons/fa";

const CartTableRow = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="py-4 px-6">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-[75px] rounded-sm"
          />
        </td>
        <td className="py-4 px-6">{product.name}</td>
        <td className="py-4 px-6">${product.price}</td>
        <td onClick={() => removeFromCart(product.name)} className="py-4 px-2"><FaSkullCrossbones className="mx-auto"/></td>
      </tr>
    </>
  );
};

export default CartTableRow;
