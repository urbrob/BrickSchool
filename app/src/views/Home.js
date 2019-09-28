import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import HomeSearchBox from "../components/HomeSearchBox/HomeSearchBox";
import ContentWrapper from "../components/ContentWrapper";
import "./layout.css";

const HomePage = () => {
  return (
    <div className="Layout">
      <HeaderMenu />
      <ContentWrapper>
      </ContentWrapper>
      <FooterCredits />
    </div>
  );
};

export default HomePage;
