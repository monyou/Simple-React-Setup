import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import AdminNavigation from "./routing/navigations/admin";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AdminNavigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
