import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ApplicationState } from "./store-types";
import globalReducers from "./reducers/global-reducers";

const KYOSO_REDUX_STORE = "simple-app-store";
const cachedStore = localStorage.getItem(KYOSO_REDUX_STORE);

const storeConfig = {
  preloadedState: {},
  reducer: {
    global: combineReducers(globalReducers),
  },
  middleware: [],
};

if (cachedStore) {
  storeConfig.preloadedState = JSON.parse(cachedStore);
}

// @ts-ignore
const store = configureStore(storeConfig);

store.subscribe(() => {
  localStorage.setItem(KYOSO_REDUX_STORE, JSON.stringify(store.getState()));
});

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export default store;
