import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import CountryBar from "../components/CountryBar";
import TourList from "../components/TourList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCountries, fetchTours, fetchTypes} from "../http/tourAPI";
import Pages from "../components/Pages";

const Agency = observer(() => {
    const {tour} = useContext(Context)

useEffect(() => {
    fetchTypes().then(data => tour.setTypes(data))
    fetchCountries().then(data => tour.setCountries(data))
    fetchTours(null,null,1,2).then(data => {
        tour.setTours(data.rows)
        tour.setTotalCount(data.count)
    })
}, [])

    useEffect( () => {
            fetchTours(tour.selectedType.id, tour.selectedCountry.id, tour.page, 2).then(data => {
                tour.setTours(data.rows)
                tour.setTotalCount(data.count)
            })
}, [tour.page, tour.selectedType, tour.selectedCountry])

    return (
        <Container>
            <Row className= "mt-2">
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <CountryBar />
                    <TourList />
                    <Pages/>
                </Col>


            </Row>
        </Container>
    );
});

export default Agency;