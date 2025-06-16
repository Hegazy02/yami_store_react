export const initialState = {
  items: [],
  totalAmount: 0,
  discountCode: "",
  discount: 0,
  error: "",
};
const saveCart = (newState) => {
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};
export const cartReducer = (state, action) => {
  let newState = {};
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.items.some((item) => item.id === action.payload.id)) {
        newState = {
          ...state,
          error: "",
        };
        return saveCart(newState);
      }
      newState = {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
        totalAmount: state.totalAmount + action.payload.price,
        error: "",
      };
      return saveCart(newState);

    case "REMOVE_FROM_CART":
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalAmount:
          state.totalAmount - action.payload.price * removedItem.quantity,
        error: "",
      };
      return saveCart(newState);
    case "INCREASE_QUANTITY":
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalAmount: state.totalAmount + action.payload.price,
        error: "",
      };
      return saveCart(newState);
    case "DECREASE_QUANTITY":
      const item = state.items.find((item) => item.id === action.payload.id);
      console.log("qty", item.quantity);

      if (item.quantity > 1) {
        newState = {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalAmount: state.totalAmount - action.payload.price,
          error: "",
        };
        return saveCart(newState);
      }
      return state;
    case "APPLY_DISCOUNT":
      newState = {
        ...state,
        discountCode: action.payload.discountCode,
        discount: action.payload.discount,
        error: "",
      };
      return saveCart(newState);

    case "REMOVE_DISCOUNT":
      newState = {
        ...state,
        discountCode: "",
        discount: 0,
        error: "",
      };
      return saveCart(newState);

    case "CLEAR_CART":
      newState = {
        ...state,
        items: [],
        totalAmount: 0,
        error: "",
      };
      return saveCart(newState);
    case "SET_CART":
      return action.payload;
    default:
      return {
        ...state,
        error: "Invalid action type",
      };
  }
};
