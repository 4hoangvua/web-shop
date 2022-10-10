import * as Actions from "../Actions";

const initialState = {
  myCarts: [],
};
const myCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_CART: {
      const { product, quantity } = action.data;
      const index = state.myCarts.findIndex(
        (item) => item.product.id === product.id
      );
      if (index === -1) {
        const myCarts = [...state.myCarts, { product, quantity }];
        return { ...state, myCarts };
      } else {
        state.myCarts[index].quantity += quantity;
        return { ...state };
      }
    }
    case Actions.CLEAR_MY_CART: {
      const myCarts = [];
      return { ...state, myCarts };
    }
    default:
      return state;
  }
};
export default myCartReducer;
