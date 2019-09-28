import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import {Button} from "antd";
import {Link} from "react-router-dom"


export class HomeSearchBox extends Component {

  render() {
      return (
          <Carousel fade={true}>
            <Carousel.Item
                style={{
                  maxHeight:"87vh",
                }}
            >
              <img
                  className="d-block w-100"
                  src="https://i.imgur.com/HOOxsgf.jpg"
                  alt="First slide"
                  style={{
                    width:"100%",

                  }}
              />
              <Carousel.Caption
                  style={{
                    marginTop:"10%",
                    marginBottom:"25%",
                    marginRight:"85%",
                    marginLeft:"5%"
                  }}
              >
                <h1 style={{
                  color: "white",
                  whiteSpace:"nowrap",
                  textAlign:"justify",
                  textShadow:"1px 1px 2px black"
                }}
                >First slide label</h1>
                <p
                    style={{
                      color: "white",
                      whiteSpace:"nowrap",
                      textAlign:"justify",
                      textShadow:"1px 1px 2px black"
                    }}
                >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Link to={"/records"}>
                  <Button size={"large"}>Try it now</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                  maxHeight:"87vh"
                }}
            >
              <img
                  className="d-block w-100"
                  src="https://i.imgur.com/fzZXHcq.jpg"
                  alt="Third slide"
                  style={{
                    objectFit:"fill",
                    width:"100%"
                  }}
              />

              <Carousel.Caption
                  style={{
                    marginTop:"3%",
                    marginBottom:"25%",
                    marginRight:"90%",
                    marginLeft:"2%"
                  }}
              >
                <h1 style={{
                  color: "white",
                  whiteSpace:"nowrap",
                  textAlign:"justify",
                  textShadow:"1px 1px 2px black"
                }}
                >First slide label</h1>
                <p
                    style={{
                      color: "white",
                      whiteSpace:"nowrap",
                      textAlign:"justify",
                      textShadow:"1px 1px 2px black"
                    }}
                >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Link to={"/records"}>
                  <Button size={"large"}>Try it now</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                  maxHeight:"87vh"
                }}
            >
              <img
                  className="d-block w-100"
                  src="https://i.imgur.com/lw7fjBO.jpg"
                  alt="Third slide"
              />

              <Carousel.Caption
                  style={{
                    marginTop:"3%",
                    marginBottom:"25%",
                    marginRight:"90%",
                    marginLeft:"2%"
                  }}
              >
                <h1 style={{
                  color: "white",
                  whiteSpace:"nowrap",
                  textAlign:"justify",
                  textShadow:"1px 1px 2px black"
                }}
                >First slide label</h1>
                <p
                    style={{
                      color: "white",
                      whiteSpace:"nowrap",
                      textAlign:"justify",
                      textShadow:"1px 1px 2px black"
                    }}
                >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Link to={"/records"}>
                  <Button size={"large"}>Try it now</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      );
    }

}

export default HomeSearchBox;
