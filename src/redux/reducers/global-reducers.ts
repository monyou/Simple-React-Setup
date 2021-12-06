import * as actionTypes from "../action-types";

const initialState = {
  name: "MonTi",
  theme: "light",
  loading: false,
  error: null,
};

export const name = (
  state = initialState.name,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_NAME:
      return action.payload;
    default:
      return state;
  }
};

export const theme = (
  state = initialState.theme,
  action: { type: string; payload: "light" | "dark" }
) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_THEME:
      return action.payload;
    default:
      return state;
  }
};

export const loading = (
  state = initialState.loading,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const error = (
  state = initialState.error,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const globalReducers = {
  name,
  theme,
  loading,
  error,
};

export default globalReducers;
