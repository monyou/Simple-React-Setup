import * as actionTypes from "../action-types";

export const setGlobalName = (name: string) => {
  return { type: actionTypes.SET_GLOBAL_NAME, payload: name };
};

export const setGlobalTheme = (theme: "light" | "dark") => {
  return { type: actionTypes.SET_GLOBAL_THEME, payload: theme };
};

export const setGlobalLoading = (loading: boolean) => {
  return { type: actionTypes.SET_GLOBAL_LOADING, payload: loading };
};

export const setGlobalError = (error: string) => {
  return { type: actionTypes.SET_GLOBAL_ERROR, payload: error };
};

const globalActions = {
  setGlobalName,
  setGlobalTheme,
  setGlobalLoading,
  setGlobalError,
};

export default globalActions;
