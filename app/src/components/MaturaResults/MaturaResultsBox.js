import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { Icon } from "antd";

export default class MaturaResultsBox extends PureComponent {
  render() {
    const results = this.props.results;
    console.log(results);
    const data = results.map(r => ({
      name: r.subject + " " + r.dataType,
      A: r.avgRate,
      fullMark: 100
    }));

    return (
      <div>
        <h1 style={{ fontSize: "2vw", textAlign: "center" }}>
          Średnia wyników maturalnych
        </h1>
        <center>
          {" "}
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={580}
            height={470}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Wyniki"
              dataKey="A"
              stroke="#ffae3c"
              fill="#ffae3c"
              fillOpacity={0.6}
            />
          </RadarChart>
          <br />
          <h1 style={{ fontSize: "2vw", textAlign: "center" }}>
            Demografia szkoły
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "2vw",
                textAlign: "center",
                marginRight: "2vw"
              }}
            >
              <Icon
                type="team"
                style={{
                  color: " #ffae3c",
                  fontSize: "3vw"
                }}
              />
              432
            </div>
            <div
              style={{
                color: "white",
                fontSize: "2vw",
                textAlign: "center",
                marginRight: "2vw"
              }}
            >
              <Icon
                type="man"
                style={{
                  color: " #ffae3c",
                  fontSize: "3vw"
                }}
              />
              34%
            </div>
            <div
              style={{
                color: "white",
                fontSize: "2vw",
                textAlign: "center",
                marginRight: "2vw"
              }}
            >
              <Icon
                type="woman"
                style={{
                  color: " #ffae3c",
                  fontSize: "3vw"
                }}
              />
              64%
            </div>
          </div>
        </center>
      </div>
    );
  }
}
