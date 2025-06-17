import { memo } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { toast } from "react-hot-toast";

const CartItem = memo(({ dispatch, item }) => {
  console.log("CartItem rendered");
  const iconStyle = "btn btn-circle btn-ghost";
  const handleDeleteItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    toast.success("Item Deleted!");
  };
  return (
    <li className="list-row">
      <div>
        <img className="size-14 rounded-box" src={item.image} />
      </div>
      <div>
        <div>{item.title}</div>
        <div className="text-xs uppercase opacity-60">{item.category}</div>
        <div className="font-semibold">${item.price}</div>
      </div>
      <div className="actions flex items-center">
        <button
          className={iconStyle}
          onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}
        >
          <IoIosAddCircleOutline className="text-2xl" />
        </button>
        <p>{item.quantity}</p>
        <button
          className={iconStyle}
          onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}
        >
          <CiCircleMinus className="text-2xl" />
        </button>
        <button className={iconStyle} onClick={handleDeleteItem}>
          <TiDeleteOutline className="text-2xl" />
        </button>
      </div>
    </li>
  );
});

export default CartItem;
