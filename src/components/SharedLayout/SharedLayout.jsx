import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import TSC_logo from "../../assets/logo/TSC_logo.png";

const SharedLayout = () => {
  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }
  return (
    <div onContextMenu={handleContextMenu}>
      <Outlet />
      <Nav />
      <Footer />
      
      
    </div>
  );
};

export default SharedLayout;
