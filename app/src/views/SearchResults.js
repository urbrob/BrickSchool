import React from "react";
import { Layout } from "antd";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import FiltersDrawer from "../components/FiltersDrawer";
import Record from "../components/Record";
import school_placeholder1 from "../images/school_placeholder1.jpg";
import school_placeholder2 from "../images/school_placeholder2.jpg";
import school_placeholder3 from "../images/school_placeholder3.jpg";
import "./layout.css";

const { Content } = Layout;

const exampleRecords = [
  {
    name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
    distance: 2,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder1
  },
  {
    name: "Technikum nr 2 na Ślunsku",
    distance: 666,
    perspektywyBadge: false,
    schoolType: "Technikum",
    thumbnail: school_placeholder2
  },
  {
    name: "Liceum Ogólnozniekształcające nr 12 w Łodzi",
    distance: 1,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder3
  }
];

const SearchResults = () => {
  return (
    <div className="Layout">
      <HeaderMenu />
      <div
        title="filtersContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#707070"
        }}
      >
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 1: status</p>
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 2: status</p>
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 3: status</p>
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 4: status</p>
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 5: status</p>
        <p style={{ margin: "10px 30px", color: "white" }}>Filter 6: status</p>
        <div style={{ marginLeft: "350px", color: "white" }}>
          <FiltersDrawer />
        </div>
      </div>
      <Content
        title="searchResultsContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
          height: "160px",
          backgroundColor: "red"
        }}
      >
        {exampleRecords.map(record => (
          <Record
            name={record.name}
            distance={record.distance}
            perspektywyBadge={record.perspektywyBadge}
            schoolType={record.schoolType}
            thumbnail={record.thumbnail}
          />
        ))}
      </Content>
      <FooterCredits />
    </div>
  );
};

export default SearchResults;
