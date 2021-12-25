import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../../../assets/logos/logo.svg";
import { setGlobalPageTitle } from "../../../../redux/actions/global-actions";
import { useAppSelector } from "../../../../redux/store";
import "./AppPage.scss";

const App = () => {
  const { name } = useAppSelector((state) => ({ name: state.global.name }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGlobalPageTitle("App page title"));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm {name} !</p>
      </header>
    </div>
  );
};

App.displayName = "App";
export default App;
