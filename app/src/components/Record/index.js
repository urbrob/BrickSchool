import React from "react";

const Record = ({
  name,
  distance,
  perspektywyBadge,
  schoolType,
  thumbnail
}) => (
  <div
    style={{
      width: "90%",
      height: "30%",
      padding: "15px 15px",
      margin: "10px 15px",
      backgroundColor: "#707070",
      borderRadius: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyItems: "flex-start"
    }}
  >
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
