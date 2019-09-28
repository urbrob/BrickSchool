import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "limegreen",
        height: "87vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
