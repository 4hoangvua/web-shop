import * as Actions from "../Actions";
import { createStore } from "../functions";
const dong_don_hang = createStore("dong_don_hang");
let lin = dong_don_hang.get("lineOrder");
if (!lin) lin = [];
// lineOrder: [
//   {
//     id: 0,
//     listProduct: [{ _idSP: 0, quantity: 0, price: 0 }],
//     totalBeforeTax: 0,
//     totalTax: 0,
//   },
// ],
const initialState = {
  lineOrder: lin,
  detailOrder: {},
};
const lineOrder = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DATA_DONG_DON_HANG: {
      const { lineOrder } = action.data;
      return { ...state, lineOrder: [...state.lineOrder, lineOrder] };
    }
    case Actions.DETAIL_DON_HANG: {
      const { id } = action.data;
      const detailOrder = state.lineOrder.find((item) => item.id === id);
      return { ...state, detailOrder };
    }
    case Actions.SAVE_DONG_DON_HANG: {
      dong_don_hang.set("lineOrder", state.lineOrder);
    }
    default:
      return state;
  }
};
export default lineOrder;
