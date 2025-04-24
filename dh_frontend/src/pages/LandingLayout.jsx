import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <Outlet />
      {/* The Outlet component is used to render child routes */}
      {/* You can add more components or elements here as needed */}
      {/*add a footer that is centered at the bottom of the page and scrolls*/}
      {/*
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center", // Centers text horizontally
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px", // Optional: Set a fixed height for the footer
            backgroundColor: "#f8f9fa", // Optional: Add a background color
          }}
        >
          <p>Footer content</p>
        </footer>
      */}
    </>
  );
};

export default LandingLayout;
