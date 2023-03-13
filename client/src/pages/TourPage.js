import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Image, Button, Card} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"
import {useParams} from 'react-router-dom'
import {fetchOneTour} from "../http/tourAPI";

const TourPage = () => {
    const [tour, setTour] = useState({info: []})
    const {id} = useParams()
    useEffect(() =>{
        fetchOneTour(id).then(data => setTour(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md = {4}>
                    <Image width = {300} height = {300} src = {process.env.REACT_APP_API_URL + tour.img}/>
                </Col>
                <Col md = {4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{tour.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center "
                            style={{background: `url(${bigStar}) no-repeat center center `, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {tour.rating}
                        </div>
                    </Row>
                </Col>
                <Col md = {4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style ={{width:300, height:300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: {tour.price} руб.</h3>
                        <Button variant = {"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Описание тура:</h1>
                {tour.info.map((info, index) =>
                    <Row key = {info.id} style = {{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
                </Container>
    );
};

export default TourPage;