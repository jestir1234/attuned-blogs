// @flow

import { createStore } from "redux";
import reducers from "../reducers";

export const initialStore = (initialState?: Object) => {
  let store = createStore(reducers, initialState || {});
  return store;
};
