import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import CountryBar from "../components/CountryBar";
import TourList from "../components/TourList";

const Agency = () => {
    return (
        <Container>
            <Row className= "mt-2">
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <CountryBar />
                    <TourList />
                </Col>


            </Row>
        </Container>
    );
};

export default Agency;