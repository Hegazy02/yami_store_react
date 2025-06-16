import CartItem from "./CartItem";

const CartItems = ({ state, dispatch }) => {
  return (
    <div className="products w-full overflow-y-scroll">
      <ul className="list rounded-box">
        {state.items.map((item, index) => (
          <div key={item.id}>
            <CartItem dispatch={dispatch} item={item} />
            {state.items.length - 1 !== index && (
              <hr className="my-2 border-gray-300" />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
