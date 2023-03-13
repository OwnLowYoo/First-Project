import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {TOUR_ROUTE} from "../utils/consts";

const TourItem = ({tour}) => {
    const navigate = useNavigate()
    return (
        <Col md = {3} className={"mt-3"} onClick={() => navigate(TOUR_ROUTE + '/' + tour.id)}>
            <Card style = {{width: 150, cursor: 'pointer'}} border = {"light"}>
                <Image width={150} height = {150} src = {process.env.REACT_APP_API_URL + tour.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div> Испания </div>
                    <div className="d-flex align-items-center">
                        <div>{tour.rating}</div>
                        <Image width={16} height={16} src = {star}/>
                    </div>
                </div>
                <div>{tour.name}</div>
            </Card>
        </Col>
    );
};

export default TourItem;