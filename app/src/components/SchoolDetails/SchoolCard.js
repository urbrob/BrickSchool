import React, {Component} from "react";
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';


export class SchoolCard extends Component {

    render() {

        return (
            <div
                style={{
                    margin:"3%"
                }}
            >
                <Row gutter={10}>
                    <Col xs={8} sm={8} md={9} lg={9} xl={9}>
                        <Card

                            headStyle={{
                                backgroundColor:"#5a5a5a"
                            }}
                            bodyStyle={{
                                backgroundColor:"#5a5a5a"
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://i.imgur.com/z5K1cVi.jpg"
                                />
                            }
                            style={{
                                minHeight:"80vh",
                                backgroundColor:"#5a5a5a"
                            }}

                        >
                            <Row gutter={2} >
                                <Col xs={6} sm={6} md={7} lg={8} xl={8}>
                                    <Avatar shape="square" size={128} src={"https://i.imgur.com/o5vbzhA.png"} />
                                </Col>
                                <Col xs={10} sm={10} md={14} lg={16} xl={16}
                                >
                                    <h4>Szkoła im. Twojej starej</h4>
                                    <p>Adres: Chujowa 8</p>
                                    <p>Strona www: chujcinakurwe.pl</p>
                                    <p>Telefon:  669987576</p>

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={14} sm={14} md={14} lg={14} xl={14} style={{

                    }}>
                        <Card title="Informacje szczegółowe"
                              style={{
                                  minHeight:"80vh",
                                  backgroundColor:"#5a5a5a"
                              }}
                        >
                            <p>xDDDDDDD</p>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>xD</p>
                            <p>xD</p>
                            <p>xD</p>
                            <p>XD</p>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default SchoolCard;