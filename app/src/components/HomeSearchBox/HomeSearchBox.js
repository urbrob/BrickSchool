import React, {Component, Fragment} from 'react';
import {Carousel} from 'react-bootstrap';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Content } = Layout;

export class HomeSearchBox extends Component {
    constructor(){
        super();
        this.state={
            isClicked: false
        }
    }

    render() {
        if(this.state.isClicked){
            return(
              <div>xD pyklo se</div>
            );
        }
        else{
            return(
                <Content

                >
                    <Carousel

                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://i.imgur.com/AQdGLoJ.jpg"}
                                alt="First slide"

                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://i.imgur.com/AQdGLoJ.jpg"}
                                alt="Third slide"

                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://i.imgur.com/AQdGLoJ.jpg"}
                                alt="Third slide"

                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Content>

            );
        }


    }
}

export default HomeSearchBox;