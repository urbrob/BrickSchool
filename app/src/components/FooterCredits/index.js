import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterCredits = () => (
  <Footer
    style={{
      textAlign: "center",
      height: "10%",
      padding: "20px 0",
      backgroundColor: "#505050",
      color: "white"
    }}
  >
    BlueBrick Hackathon ©2019 Created by Team Ogryzek
  </Footer>
);

export default FooterCredits;
