import React from "react";
import MainNavbar from "../components/layout/MainNavbar";

const AuthLayout = (props) => {
  const { children, noNavbar, noFooter } = props;
  return (
    <div  >
      <div>
        <MainNavbar history={props}/>
      </div>
    </div >
  )
};
export default AuthLayout;
