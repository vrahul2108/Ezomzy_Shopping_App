import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center bg-white p-4 shadow-md rounded-lg mb-4 space-x-4">
      {/* Image */}
      <div className="w-24 h-24">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h1>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 flex items-center space-x-1 transition"
          >
            <FcDeleteDatabase size={20} />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
