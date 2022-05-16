import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
const Loader = ({ loading }) => {
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999
        }}
      >   
      < div className="full-loader">
          <div className="container alignmentCenter">
            <div className="loader"><CircularProgress/></div>
          </div>
        </div>
      </div >
    );
  } else {
    return <div style={{ display: "none" }} />;
  }
};

export default Loader;