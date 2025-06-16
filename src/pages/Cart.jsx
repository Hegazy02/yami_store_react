import CartItems from "../components/CartItems";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdOutlineDeleteSweep } from "react-icons/md";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="flex gap-16 p-4">
      <div className="w-2/3">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">
            Cart{" "}
            <span className="text-sm font-normal text-gray-500">
              {`(` + state.items.length + ` items)`}
            </span>
          </h2>
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
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
      <div className="flex flex-col mt-4 p-4  w-1/3 h-1/3  border border-gray-300 rounded">
        <input
          type="text"
          placeholder="Promo Code"
          className="input input-bordered w-full bg-gray-100 focus:outline-none mb-4"
        />
        <p className="text-sm text-gray-500">Discount: $ {state.discount}</p>
        <p className="text-sm text-gray-500">Subtotal: $ {state.totalAmount.toFixed(2)}</p>
        <h3 className="text-lg font-semibold">
          Total: $ {(state.totalAmount - state.discount).toFixed(2)}
        </h3>
        <button
          className="btn btn-primary mt-2"
          disabled={state.items.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
