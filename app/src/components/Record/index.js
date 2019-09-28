import React from "react";
import "./index.css";

const Record = ({
  name,
  distance,
  perspektywyBadge,
  schoolType,
  thumbnail
}) => (
  <div className="recordBox">
    <img
      src={thumbnail}
      alt="School thumbnail"
      height="90%"
      width="250vw"
      style={{ borderRadius: "5px", marginRight: "20px" }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "flex-start"
      }}
    >
      <h1>{name}</h1>
      <h3>{distance}</h3>
      <p>{perspektywyBadge ? "Odznaka Perspektywy 2019" : ""}</p>
      <p>{schoolType}</p>
    </div>
  </div>
);
export default Record;
