import { createStore } from "redux";
import getReducers from "../reducers";

export const initialStore = (initialState?: Object) => {
  let store = createStore(getReducers(), initialState || {});
  return store;
};
