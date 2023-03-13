import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import CountryBar from "../components/CountryBar";
import TourList from "../components/TourList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCountries, fetchTours, fetchTypes} from "../http/tourAPI";

const Agency = observer(() => {
    const {tour} = useContext(Context)

useEffect(() => {
    fetchTypes().then(data => tour.setTypes(data))
    fetchCountries().then(data => tour.setCountries(data))
    fetchTours().then(data => tour.setTours(data.rows))
}, [])


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
});

export default Agency;