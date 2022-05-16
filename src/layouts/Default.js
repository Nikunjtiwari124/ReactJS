import React from "react";
// import PropTypes from "prop-types";
// import { Container, Row, Col } from "react-bootstrap";
// import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
// import MainSidebar from "../components/layout/MainSidebar/MainSidebar";

export const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <div className="" >
    <div className="">
      {/* <div className="wrapper d-flex flex-column flex-row-fluid"> */}
      {/* <MainSidebar /> */}
      {/* <MainNavbar /> */}
      {children}
    </div>
  </div>
);




// export default DefaultLayout;
