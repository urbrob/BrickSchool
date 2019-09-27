import React from "react";
import { Layout } from "antd";
import logo from "./images/logo.png";

const { Footer, Content } = Layout;

const HomePage = () => {
  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
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
          title="searchBox"
          style={{
            padding: "0 50px",
            height: "60%",
            textAlign: "center",
            background: "#fff",
            margin: "30px 20px"
          }}
        >
          Searchbox placeholder
        </Content>
        <Footer
          style={{ textAlign: "center", height: "10%", padding: "20px 0" }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      ,
    </div>
  );
};

export default HomePage;
