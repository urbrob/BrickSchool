import React from "react";
import { Layout, Menu } from "antd";
import logo from "../images/logo.png";
import background from "../images/bg1.jpg";

const { Footer, Content, Header } = Layout;

const HomePage = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              lineHeight: "64px",
              justifySelf: "center",
              backgroundColor: "red",
              textAlign: "right"
            }}
          >
            <Menu.Item style={{ backgroundColor: "blue" }}>
              Menu item 1
            </Menu.Item>
            <Menu.Item style={{ backgroundColor: "blue" }}>
              Menu item 2
            </Menu.Item>
            <Menu.Item style={{ backgroundColor: "blue" }}>
              Menu item 3
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          title="logo"
          style={{
            height: "10%",
            textAlign: "center",
            margin: "50px 0 0"
          }}
        >
          <img src={logo} height="70%" />
        </Content>
        <Content
          title="contentContainer"
          style={{
            padding: "0 50px",
            height: "60%",
            textAlign: "center",
            backgroundImage: { ...background },
            margin: "30px"
          }}
        >
          Searchbox placeholder
        </Content>
        <Footer
          style={{ textAlign: "center", height: "10%", padding: "20px 0" }}
        >
          BlueBrick Hackathon ©2019 Created by Team Ogryzek
        </Footer>
      </Layout>
      ,
    </div>
  );
};

export default HomePage;
