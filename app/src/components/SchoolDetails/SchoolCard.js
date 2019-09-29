import React, {Component} from "react";
import {Row, Col} from 'antd';
import {Card, Avatar} from 'antd';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import MaturaResultsBox from "../MaturaResults/MaturaResultsBox"

const SCHOOL_DETAILS_QUERY = gql`
    query SchoolDetailsQuery{
    
        schoolDetail(id: 10){
            name
            city
            location
            website
            phone
        statisticsSet{
             finalexamSet{
                subject
                avgRate
                dataType
                numberOfPeople
      
               }
    
         }
    }
}
`

export class SchoolCard extends Component {

    render() {
        let schoolId = window.location.pathname.split("/").pop();
        console.log(schoolId);
        return (

            <div
                style={{
                    margin: "3%"
                }}
            >
               <Query query={SCHOOL_DETAILS_QUERY} >
                    {({loading, error, data})=>{
                        if(loading) return(<h1>Loading...</h1>);
                        if(error) return (<h1>Error</h1>);
                        console.log(data.schoolDetail);
                        const results = data.schoolDetail.statisticsSet[0].finalexamSet;
                        const{
                            name,
                            city,
                            location,
                            website,
                            phone,
                        }=data.schoolDetail;


                        return(

                            <Row gutter={10}>
                                <Col xs={8} sm={8} md={9} lg={9} xl={9}>
                                    <Card

                                        headStyle={{
                                            backgroundColor: "#5a5a5a"
                                        }}
                                        bodyStyle={{
                                            backgroundColor: "#5a5a5a"
                                        }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://i.imgur.com/z5K1cVi.jpg"
                                            />
                                        }
                                        style={{
                                            minHeight: "80vh",
                                            maxHeight: "80vh",
                                            backgroundColor: "#5a5a5a"
                                        }}

                                    >
                                        <Row gutter={2}>
                                            <Col xs={6} sm={6} md={7} lg={8} xl={8}>
                                                <Avatar shape="square" size={128} src={"https://i.imgur.com/o5vbzhA.png"}/>
                                            </Col>
                                            <Col xs={10} sm={10} md={14} lg={16} xl={16}
                                            >
                                                <h4>{name}</h4>
                                                <p>Adres: {location +' ' + city} </p>
                                                <p>Strona www: {website}</p>
                                                <p>Telefon: {phone}</p>

                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col xs={14} sm={14} md={14} lg={14} xl={14} style={{}}>
                                    <Card title="Informacje szczegółowe"
                                          style={{
                                              minHeight: "80vh",
                                              maxHeight: "80vh",
                                              backgroundColor: "#5a5a5a"
                                          }}
                                    >
                                        <MaturaResultsBox results={results}/>
                                    </Card>
                                </Col>
                            </Row>
                        );

                    }
                    }

                </Query>

            </div>

        );
    }
}

export default SchoolCard;