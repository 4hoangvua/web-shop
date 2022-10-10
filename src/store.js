import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleWare from "redux-saga";
import rootWatcher from "./watchers";

const saga = createSagaMiddleWare();
const middleWares = [saga];
const store = createStore(rootReducer, applyMiddleware(...middleWares));
saga.run(rootWatcher);
export default store;
