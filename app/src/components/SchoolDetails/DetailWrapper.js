import React from "react";

const DetailWrapper = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "#505050",
                minHeight: "87vh",

            }}
        >
            {children}
        </div>
    );
};

export default DetailWrapper;
