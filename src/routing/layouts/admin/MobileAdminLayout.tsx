import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalLoader from "../../../components/global-loader/GlobalLoader";
import ThemeToggler from "../../../components/theme-toggler/ThemeToggler";
import "./MobileAdminLayout.scss";

type MobileAdminLayoutProps = {
  children: any;
};

const MobileAdminLayout = ({
  children,
}: MobileAdminLayoutProps): JSX.Element => {
  const [menu, setMenu] = useState(false);

  return (
    <div id="mobile-admin-layout">
      <div id="heading">
        <div className="site-title">My App</div>
        <i className="fas fa-bars menu-toggler" onClick={() => setMenu(true)} />
      </div>
      <div id="content">{children}</div>
      {menu && (
        <div id="menu">
          <div className="heading">
            <ThemeToggler />
            <i
              className="fas fa-times close-menu"
              onClick={() => setMenu(false)}
            />
          </div>
          <div className="links">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "page-link active" : "page-link"
              }
              onClick={() => setMenu(false)}
            >
              <i className="fas fa-home"></i>
              <span>App</span>
            </NavLink>
          </div>
        </div>
      )}

      <GlobalLoader />
    </div>
  );
};

MobileAdminLayout.displayName = "MobileAdminLayout";
export default MobileAdminLayout;
