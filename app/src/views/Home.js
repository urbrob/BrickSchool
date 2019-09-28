import React from "react";
import { Layout } from "antd";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import HomeSearchBox from "../components/HomeSearchBox/HomeSearchBox";
import ContentWrapper from "../components/ContentWrapper";

const HomePage = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <HeaderMenu />
        <ContentWrapper>
          <HomeSearchBox />
        </ContentWrapper>
        <FooterCredits />
      </Layout>
    </div>
  );
};

export default HomePage;
