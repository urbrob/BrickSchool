import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#505050",
        height: "87vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
