import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggler from "../../../components/theme-toggler/ThemeToggler";
import "./AdminLayout.scss";

type AdminLayoutProps = {
  children: any;
};

const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => {
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
          <div className="page-title">Page Title</div>
          <ThemeToggler />
        </div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

AdminLayout.displayName = "AdminLayout";
export default AdminLayout;
