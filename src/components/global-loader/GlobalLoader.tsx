import React from "react";
import { useAppSelector } from "../../redux/store";
import "./GlobalLoader.scss";

const GlobalLoader = () => {
  const loading = useAppSelector((state) => state.global.loading);

  if (loading) {
    return (
      <div id="global-loader">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    );
  }

  return null;
};

GlobalLoader.displayName = "GlobalLoader";
export default GlobalLoader;
