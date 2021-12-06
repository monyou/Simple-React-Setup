import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGlobalTheme } from "../../redux/actions/global-actions";
import { useAppSelector } from "../../redux/store";
import "./ThemeToggler.scss";

const ThemeToggler = () => {
  const [togglerState, setTogglerState] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.global.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    setTogglerState(theme === "light" ? false : true);
  }, [theme]);

  return (
    <div id="theme-toggler">
      <label className="switch">
        <input
          type="checkbox"
          checked={togglerState}
          onChange={(e) =>
            dispatch(setGlobalTheme(e.target.checked ? "dark" : "light"))
          }
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

ThemeToggler.displayName = "ThemeToggler";
export default ThemeToggler;
