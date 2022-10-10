import * as Actions from "../Actions";
import { createStore } from "../functions";
const don_hang = createStore("don_hang");
// const defaultOr = [{ id: 0, name: "", totalBeforeTax: 0, totalTax: 0, total: 0 }];
let ord = don_hang.get("order");
if (!ord) ord = [];
const inititalState = {
  order: ord,
};

const orderReducer = (state = inititalState, action) => {
  switch (action.type) {
    case Actions.GET_DATA_DON_HANG:
      const { order } = action.data;
      return { ...state, order: [...state.order, order] };
    case Actions.SAVE_DON_HANG: {
      don_hang.set("order", state.order);
    }
    default:
      return state;
  }
};
export default orderReducer;
