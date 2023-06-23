import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="mt-[8rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
