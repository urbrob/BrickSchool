import React from "react";
import "./index.css";
import { badges } from "./badges";
import { Link } from "react-router-dom";

const Record = ({
  name,
  schoolId,
  location,
  perspektywyBadge,
  schoolType,
  thumbnail,
  wsk,
  ranking
}) => (
  <div className="recordBox">
    <img
      src={thumbnail}
      alt="School thumbnail"
      style={{
        borderRadius: "5px",
        marginRight: "20px",
        width: "20%",
        height: "100%"
      }}
    />
    <div className="recordInfo">
      <div className="ranking">#{schoolId} w rankingu wojewódzkim</div>
        <Link to={`/detail/${schoolId}`}>
            <div className="schoolName">{name}</div>
        </Link>

      <div className="location">{location}</div>
    </div>
    <div className="recordStatistics">
      <div className="statisticsBox">
        <p>WSK</p>
        <div className="wsk">{wsk}</div>
      </div>
      <div className="badge">
        <img src={badges.find(b => b.type === perspektywyBadge).icon} />
      </div>
    </div>
  </div>
);
export default Record;
