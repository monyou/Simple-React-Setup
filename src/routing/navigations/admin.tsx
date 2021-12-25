import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { useIsMobileView, useThemes } from "../../utils/common";
import MainLayout from "../layouts/admin/AdminLayout";
import MobileLayout from "../layouts/admin/MobileAdminLayout";
import AppPage from "../../modules/app/pages/AppPage/AppPage";

const noAuthenticationPage = (Layout: any, Component: any): JSX.Element => {
  return <Layout children={<Component />} />;
};

// eslint-disable-next-line
const authenticatePage = (Layout: any, Component: any): JSX.Element | null => {
  //TODO: implement protection and use it in if else
  const someLogic = true;

  if (someLogic) {
    return <Layout children={<Component />} />;
  }

  return <Navigate to={"/"} />;
};

const AdminNavigation = (): JSX.Element => {
  useThemes();
  const isMobile = useIsMobileView();

  const layout = !isMobile ? MainLayout : MobileLayout;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={noAuthenticationPage(layout, AppPage)} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminNavigation;
