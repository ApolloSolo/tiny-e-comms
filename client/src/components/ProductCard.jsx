import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4 mt-4">
      <img
        src={product.imageUrls[0]}
        alt={product.name}
        className="h-[200px] w-auto mx-auto rounded-md"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base">
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
      <button onClick={() => addToCart(product)} className="bg-[#78c5e9] rounded-sm m-4 px-4 py-2">BUY</button>
    </div>
  );
};

export default ProductCard;

{
  /* <div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #photography
  </span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #travel
  </span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    #winter
  </span>
</div>; */
}
