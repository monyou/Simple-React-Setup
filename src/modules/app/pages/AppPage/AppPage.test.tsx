import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./AppPage";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "../../../../utils/setupTests";

test("Should render MonTi name", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const myText = screen.getByText(/MonTi/i);
  expect(myText).toBeInTheDocument();
});
