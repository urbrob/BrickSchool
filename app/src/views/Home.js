import React from "react";
import { Layout } from "antd";
import background from "../images/bg1.jpg";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";

const { Content } = Layout;

const HomePage = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <HeaderMenu />
        <Content
          title="contentContainer"
          style={{
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: { ...background }
          }}
        >
          <h1>Searchbox placeholder</h1>
        </Content>
        <FooterCredits />
      </Layout>
    </div>
  );
};

export default HomePage;
