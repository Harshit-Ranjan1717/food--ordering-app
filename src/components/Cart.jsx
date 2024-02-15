import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // //(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="font-bold text-3xl m-5">
        Cart items - {cartItems.length}{" "}
      </h1>
      <button
        onClick={() => handleClearCart()}
        className="bg-purple-500 m-5 rounded-md w-24 h-8 shadow-xl"
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item}></FoodItem>
        ))}
      </div>
    </>
  );
};

export default Cart;
