import React from "react";
import { Layout } from "antd";
import background from "../images/bg1.jpg";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import FiltersDrawer from "../components/FiltersDrawer";

const { Content } = Layout;

const exampleRecord = {
  name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
  distance: 2,
  perspektywyBadge: true,
  schoolType: "Liceum ogólnokształcące"
};

const SearchResults = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <HeaderMenu />
        <div
          title="filtersContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundImage: { ...background },
            backgroundColor: "#707070"
          }}
        >
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 1: status
          </h2>
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 2: status
          </h2>
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 3: status
          </h2>
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 4: status
          </h2>
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 5: status
          </h2>
          <h2 style={{ margin: "10px 30px", color: "white" }}>
            Filter 6: status
          </h2>
          <div style={{ marginLeft: "180px", color: "white" }}>
            <FiltersDrawer />
          </div>
        </div>
        <Content
          title="searchResultsContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: { ...background }
          }}
        >
          <h1>Search Results placeholder</h1>
        </Content>
        <FooterCredits />
      </Layout>
    </div>
  );
};

export default SearchResults;
