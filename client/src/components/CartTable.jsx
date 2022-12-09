import { useContext } from "react";
import CartTableRow from "./CartTableRow";
import CartContext from "../context/CartContext";

const CartTable = () => {
  const { items, totalPrice } = useContext(CartContext);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Product
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6 text-center">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <CartTableRow product={item} key={index} />
          ))}
        </tbody>
      </table>
      <div>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartTable;
