import React, { useState, useEffect } from "react";
import useSchoolsList from "../hooks/useSchoolsList";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import FiltersDrawer from "../components/FiltersDrawer";
import "./layout.css";
import ContentWrapper from "../components/ContentWrapper";
import RecordsList from "../components/Record/RecordsList";
import SortMenu from "../components/Record/SortMenu";
import { Spin, Icon } from "antd";

const loader = (
  <center>
    <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
  </center>
);

const SearchResults = () => {
  const [filterName, setFilterName] = useState(""); // string
  const [filterLocation, setFilterLocation] = useState(""); // string
  const [filterType, setFilterType] = useState(""); // string
  const [filterIsPublic, setFilterIsPublic] = useState(true); // bool
  const [filterPerspectiveBadge, setFilterPerspectiveBadge] = useState(""); // string
  const [filterWsk, setFilterWsk] = useState(0); // string

  console.log("filter location:", filterWsk);

  const [isFiltered, setIsFiltered] = useState(false);

  const [schools, loading] = useSchoolsList(
    100,
    isFiltered,
    filterName,
    filterType,
    filterIsPublic,
    filterLocation,
    filterPerspectiveBadge,
    filterWsk
  );

  const [isSorted, triggerSorting] = useState(false);
  const [currentList, refreshList] = useState(schools);

  if (loading) return loader;

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
          <div
            style={{
              marginLeft: "5px",
              marginRight: "10vw",
              color: "white",
              display: "inline-flex"
            }}
          >
            <span style={{ marginRight: "10px" }}>
              <SortMenu
                schools={schools}
                trigger={triggerSorting}
                refresh={refreshList}
              />
            </span>
            <span style={{ marginRight: "10px" }}>
              <FiltersDrawer
                setIsFilteredParent={setIsFiltered}
                setFilterNameParent={setFilterName}
                setFilterTypeParent={setFilterType}
                setFilterIsPublicParent={setFilterIsPublic}
                setFilterPerspectiveBadgeParent={setFilterPerspectiveBadge}
                setFilterLocationParent={setFilterLocation}
                setFilterWskParent={setFilterWsk}
                triggerSorting={triggerSorting}
              />
            </span>
          </div>
          {filterType ? (
            <p style={{ margin: "10px 30px", color: "white" }}>
              Typ szkoły: {filterType}
            </p>
          ) : (
            <p style={{ margin: "10px 30px", color: "white" }}>
              Typ szkoły: wszystkie
            </p>
          )}
          <p style={{ margin: "10px 30px", color: "white" }}>
            Publiczna/Prywatna: {filterIsPublic ? "Publiczna" : "Prywatna"}
          </p>
          {filterPerspectiveBadge ? (
            <p style={{ margin: "10px 30px", color: "white" }}>
              Odznaka Perspektyw: {filterPerspectiveBadge}
            </p>
          ) : (
            <p style={{ margin: "10px 30px", color: "white" }}>
              Odznaka Perspektyw: nie wybrano
            </p>
          )}
          {filterWsk ? (
            <p style={{ margin: "10px 30px", color: "white" }}>
              WSK: powyzej {filterWsk}
            </p>
          ) : (
            <p style={{ margin: "10px 30px", color: "white" }}>WSK: wszystko</p>
          )}
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
            backgroundColor: "black"
            // backgroundImage: "linear-gradient(white,#ffdcab)"
          }}
        >
          <RecordsList schools={isSorted ? currentList : schools} />
        </div>
      </ContentWrapper>
      <FooterCredits />
    </div>
  );
};

export default SearchResults;
