import React from "react";
import { Layout } from "antd";
import { Layout, Menu } from "antd";
import logo from "../images/logo.png";
import background from "../images/bg1.jpg";

const { Footer, Content, Header } = Layout;

const HomePage = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div style={{ width: "20%" }}>
            <img src={logo} height="20px" />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              width: "80%",
              lineHeight: "64px",
              justifySelf: "flex-end",
              textAlign: "right"
            }}
          >
            <Menu.Item>Menu item 1</Menu.Item>
            <Menu.Item>Menu item 2</Menu.Item>
            <Menu.Item>Menu item 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          title="contentContainer"
          style={{
            padding: "0 50px",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: { ...background },
            backgroundColor: "red"
          }}
        >
          <h1>Searchbox placeholder</h1>

        </Content>
        <Footer
          style={{ textAlign: "center", height: "10%", padding: "20px 0" }}
          theme="dark"
        >
          BlueBrick Hackathon ©2019 Created by Team Ogryzek
        </Footer>
      </Layout>
      ,
    </div>
  );
};

export default HomePage;
