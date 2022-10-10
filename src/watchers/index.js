import { all } from "redux-saga/effects";
import { watcherProduct } from "./watcherProduct";

export default function* rootSaga() {
  yield all([watcherProduct()]);
}
