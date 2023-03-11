import React from 'react';
import {Col, Container, Row, Image, Button, Card} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"
const TourPage = () => {



    const tour = {id: 1, name: 'Таинственная Испания', price: 1200, rating: 0, img: `https://bolerotour.ru/upload/pl_plugin_8/1_5b06645948270.jpg`}
    const description =
        [
            {id:1, title:'Страна', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam adipisci doloribus aut! Vitae voluptates harum at nemo eum nostrum minus quidem illum iure. Rerum tempora fugiat dolor praesentium quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam adipisci doloribus aut! Vitae voluptates harum at nemo eum nostrum minus quidem illum iure. Rerum tempora fugiat dolor praesentium quidem'},
            {id:2, title:'Города', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam adipisci doloribus aut! Vitae voluptates harum at nemo eum nostrum minus quidem illum iure.'},
            {id:3, title:'Программа тура', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam adipisci doloribus aut! Vitae voluptates harum at nemo eum nostrum minus quidem illum iure.'},
            {id:4, title:'Места отьезда', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam adipisci doloribus aut! Vitae voluptates harum at nemo eum nostrum minus quidem illum iure.'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md = {4}>
                    <Image width = {300} height = {300} src = {tour.img}/>
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
                {description.map((info, index) =>
                    <Row key = {info.id} style = {{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
                </Container>
    );
};

export default TourPage;