import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import FiltersDrawer from "../components/FiltersDrawer";
import "./layout.css";
import ContentWrapper from "../components/ContentWrapper";
import RecordsList from "../components/Record/RecordsList";

const SearchResults = () => {
  return (
    <div className="Layout">
      <HeaderMenu />
      <ContentWrapper>
        <div
          title="filtersContainer"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#707070"
          }}
        >
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 1: status
          </p>
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 2: status
          </p>
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 3: status
          </p>
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 4: status
          </p>
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 5: status
          </p>
          <p style={{ margin: "10px 30px", color: "white" }}>
            Filter 6: status
          </p>
          <div style={{ marginLeft: "350px", color: "white" }}>
            <FiltersDrawer />
          </div>
        </div>
        <div
          title="searchResultsContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",
            width: "100%",
            backgroundImage: "linear-gradient(white,#ffdcab)"
          }}
        >
          <RecordsList />
        </div>
      </ContentWrapper>
      <FooterCredits />
    </div>
  );
};

export default SearchResults;
