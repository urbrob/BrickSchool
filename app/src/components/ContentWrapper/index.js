import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "limegreen",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
