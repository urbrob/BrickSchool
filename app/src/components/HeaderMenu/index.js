import React from "react";
import { Layout, Menu } from "antd";
import logo from "../../images/logo.png";

const { Header } = Layout;

const HeaderMenu = () => (
  <Header
    style={{
      display: "flex",
      justifyContent: "flex-end"
    }}
  >
    <div style={{ width: "20%" }}>
      <img src={logo} height="50px" />
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
);

export default HeaderMenu;
