import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItem = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer started");
    }, 1000);
    console.log("use Effect");

    return () => {
      console.log("unmounted");
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="text-center  font-bold mt-5">
      <h3 className="text-xl p-2 font-bold">Cart</h3>
      <div className="w-6/12 m-auto">
        {/* clear cart functionality */}
        <button
          onClick={clearCartItem}
          className="bg-black text-white p-2 m-2 shadow-lg border border-black"
        >
          Clear Cart
        </button>

        <ItemList data={cartItems} />
        {cartItems.length === 0 && <h5>Cart is Empty</h5>}
      </div>
    </div>
  );
};
