import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./HomeSearchBox.css";

export class HomeSearchBox extends Component {
  render() {
    return (
      <Carousel fade={true} controls={false} indicators={false}>
        <Carousel.Item className="carouselBox">
          <img
            className="slide"
            src="https://i.imgur.com/HOOxsgf.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              marginTop: "10%",
              marginBottom: "25%",
              marginRight: "85%",
              marginLeft: "5%"
            }}
          >
            <div className="carouselCaption">
              <div className="carouselLabel">Szybko i przejrzyście</div>
              <div className="carouselPropaganda">
                Dowiedz się więcej o szkołach w 1 miejscu.
              </div>
              <Link className="carouselLink" to={"/records"}>
                <Button size={"large"}>Wypróbuj teraz</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselBox">
          <img
            className="slide"
            src="https://i.imgur.com/fzZXHcq.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{
              marginTop: "3%",
              marginBottom: "25%",
              marginRight: "90%",
              marginLeft: "2%"
            }}
          >
            <div className="carouselCaption">
              <div className="carouselLabel">Znajdź coś dla siebie</div>
              <div className="carouselPropaganda">
                Nie masz pomysłu gdzie iść?
              </div>
              <Link className="carouselLink" to={"/records"}>
                <Button size={"large"}>Wyszukaj teraz</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselBox">
          <img
            className="slide"
            src="https://i.imgur.com/lw7fjBO.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{
              marginTop: "3%",
              marginBottom: "25%",
              marginRight: "90%",
              marginLeft: "2%"
            }}
          >
            <div className="carouselCaption">
              <div className="carouselLabel">Poznaj szczegółowe statystyki</div>
              <div className="carouselPropaganda">
                Dowiedz się więcej o swojej wymarzonej szkole.
              </div>
              <Link className="carouselLink" to={"/records"}>
                <Button size={"large"}>Kliknij tutaj</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomeSearchBox;
