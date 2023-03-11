import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import TourItem from "./TourItem";

const TourList = observer (() => {
    const {tour} = useContext(Context)

    return (
        <Row className = "d-flex">
            {tour.tours.map (tour =>
            <TourItem key = {tour.id} tour = {tour}/>
                )}
        </Row>
    );
});

export default TourList;