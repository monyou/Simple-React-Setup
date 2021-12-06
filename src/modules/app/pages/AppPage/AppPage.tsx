import React from "react";
import logo from "../../../../assets/logos/logo.svg";
import { useAppSelector } from "../../../../redux/store";
import "./AppPage.scss";

const App = () => {
  const { name } = useAppSelector((state) => ({ name: state.global.name }));

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
