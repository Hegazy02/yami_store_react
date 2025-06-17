const CartCheckout = ({ state, dispatch }) => {
  const changeHandler = (e) => {
    if (e.target.value === "code1") {
      dispatch({
        type: "APPLY_DISCOUNT",
        payload: {
          discountCode: e.target.value,
          discount: 10,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_DISCOUNT",
        payload: {
          discountCode: "",
          discount: 0,
          totalAmount: state.subTotalAmount,
        },
      });
    }
  };
  return (
    <div className="flex flex-col mt-4 p-4  md:w-1/3 h-1/3  border border-gray-300 rounded">
      <input
        type="text"
        placeholder="Promo Code, Ex:(code1)"
        className="input input-bordered w-full bg-gray-100 focus:outline-none mb-4"
        onChange={changeHandler}
      />
      <p className="text-sm text-gray-500">
        Discount:{state.discount != 0 && "%" + state.discount}
      </p>
      <p className="text-sm text-gray-500">
        Subtotal: ${state.subTotalAmount.toFixed(2)}
      </p>
      <h3 className="text-lg font-semibold">
        Total: ${state.totalAmount.toFixed(2)}
      </h3>
      <button
        className="btn btn-primary mt-2"
        disabled={state.items.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
