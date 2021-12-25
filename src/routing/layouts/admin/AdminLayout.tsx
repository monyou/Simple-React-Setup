import React from "react";
import { NavLink } from "react-router-dom";
import GlobalLoader from "../../../components/global-loader/GlobalLoader";
import ThemeToggler from "../../../components/theme-toggler/ThemeToggler";
import { useAppSelector } from "../../../redux/store";
import "./AdminLayout.scss";

type AdminLayoutProps = {
  children: any;
};

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => {
  const pageTitle = useAppSelector((state) => state.global.pageTitle);

  return (
    <div id="admin-layout">
      <div id="sidebar">
        <div className="site-title">My App</div>
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "page-link active" : "page-link"
            }
          >
            <i className="fas fa-home"></i>
            <span>App</span>
          </NavLink>
        </div>
      </div>
      <div id="content">
        <div className="headbar">
          <div className="page-title">{pageTitle}</div>
          <ThemeToggler />
        </div>
        <div className="children">{children}</div>
      </div>

      <GlobalLoader />
    </div>
  );
};

AdminLayout.displayName = "AdminLayout";
export default AdminLayout;
