import { put, delay, takeLatest, takeLeading } from "redux-saga/effects";
import history from "../utils/history";
import * as Actions from "../Actions";

export function* watcherProduct() {
  yield takeLeading(Actions.CREATE_NEW_DON_HANG, workerProduct);
  yield takeLatest(Actions.CREATE_NEW_SAN_PHAM, workerAddProduct);
}
function* workerProduct(action) {
  try {
    yield delay(2000);
    const { order, lineOrder } = action.data;
    yield put({ type: Actions.GET_DATA_DON_HANG, data: { order } });
    yield put({ type: Actions.GET_DATA_DONG_DON_HANG, data: { lineOrder } });
    yield put({ type: Actions.CLEAR_MY_CART });
    yield put({ type: Actions.SAVE_DON_HANG });
    yield put({ type: Actions.SAVE_DONG_DON_HANG });
    history.push("/admin");
  } catch (error) {}
}
function* workerAddProduct(action) {
  try {
    delay(2000);
    const { product } = action.data;
    yield put({ type: Actions.GET_DATA_SAN_PHAM, data: { product } });
    yield put({ type: Actions.SAVE_SAN_PHAM });
    history.push("/admin");
  } catch (error) {}
}
