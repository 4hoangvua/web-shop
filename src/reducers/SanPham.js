import * as Actions from "../Actions";
import { createStore } from "../functions";
const san_pham = createStore("san_pham");
const defaultPro = [
  { id: 1, name: "IOS", image: "", price: 1, tax: 0 },
  { id: 2, name: "IOS", image: "", price: 2, tax: 0 },
];

let pro = san_pham.get("products");

if (!pro) pro = [...defaultPro];

const initialState = {
  products: pro,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DATA_SAN_PHAM: {
      const { product } = action.data;
      const products = [...state.products];
      products.unshift(product);
      return { ...state, products };
    }
    case Actions.SAVE_SAN_PHAM: {
      san_pham.set("products", state.products);
      return { ...state };
    }
    default:
      return state;
  }
};
export default productReducer;
