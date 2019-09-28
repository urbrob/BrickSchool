import React from "react";
<<<<<<< HEAD
import { Layout, Menu } from "antd";
import logo from "../images/logo.png";
import StartingCard from "../components/home/StartingCard"
=======
import { Layout } from "antd";
import background from "../images/bg1.jpg";
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
>>>>>>> 0f9c4fbdb1390f59029543b31365cd1ce0f347d2

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
            backgroundColor: "red"
          }}
        >
          <StartingCard/>

        </Content>
        <FooterCredits />
      </Layout>
    </div>
  );
};

export default HomePage;
