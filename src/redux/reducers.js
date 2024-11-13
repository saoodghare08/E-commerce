import { ADD_TO_CART } from "./actions";
import { SET_FILTER, SET_SORT } from "./actions";


const initialState = {
  cart: [],
  filter: {
    text: '',
    category: ''
  }, // e.g., category filter or search text
  sort: "priceAsc", // Sorting by price (ascending or descending)
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
