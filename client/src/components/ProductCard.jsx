import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4 mt-4 dark:bg-gray-800 mx-2">
      <div className="pt-2">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="h-[200px] w-auto mx-auto rounded"
        />
      </div>

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 dark:text-[#fdf8ad]">
          {product.name}
        </h3>
        <p className="text-gray-700 text-base dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: ${product.price}
        </span>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out ml-6"
      >
        BUY
      </button>
    </div>
  );
};

export default ProductCard;
