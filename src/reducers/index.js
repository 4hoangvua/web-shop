import { combineReducers } from "redux";
import productReducer from "./SanPham";
import orderReducer from "./DonHang";
import lineOrder from "./DongDonHang";
import myCartReducer from "./MyCart";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
const reducer = combineReducers({
  sanPham: productReducer,
  donHang: orderReducer,
  dongDonHang: lineOrder,
  gioHang: myCartReducer,
  routing: routerReducer,
});
export default reducer;
