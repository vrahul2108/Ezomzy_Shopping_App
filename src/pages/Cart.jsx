import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-6">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p className="text-lg">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <p className="text-lg font-medium my-4">
              <span className="font-bold">Total Amount:</span> ${totalAmount.toFixed(2)}
            </p>
            <Link to="/checkout">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                CheckOut Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
