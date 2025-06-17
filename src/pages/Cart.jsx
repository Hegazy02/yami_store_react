import CartItems from "../components/CartItems";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdOutlineDeleteSweep } from "react-icons/md";
import EmptyCart from "../assets/empty_cart.svg";
import { toast } from "react-hot-toast";
import CartCheckout from "../components/CartCheckout";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const handleDeleteCartItems = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Cart cleared!");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16 p-4">
      <div className="w-full md:w-2/3">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">
            Cart{" "}
            <span className="text-sm font-normal text-gray-500">
              {`(` + state.items.length + ` items)`}
            </span>
          </h2>
          <button
            className="btn btn-circle btn-ghost"
            onClick={handleDeleteCartItems}
          >
            <MdOutlineDeleteSweep className="text-2xl" />
          </button>
        </header>
        {state.items.length === 0 && (
          <div className="empty flex flex-col items-center justify-center">
            <img src={EmptyCart} alt="" className="w-1/2" />
            <h2 className="text-2xl text-gray-500">Your cart is empty</h2>
          </div>
        )}
        {state.items.length > 0 && (
          <div className="cart-content flex gap-4">
            <CartItems state={state} dispatch={dispatch} />
          </div>
        )}
      </div>
      <CartCheckout state={state} dispatch={dispatch} />
    </div>
  );
};

export default Cart;
