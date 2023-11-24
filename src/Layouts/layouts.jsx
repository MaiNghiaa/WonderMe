// Layout.js
import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
