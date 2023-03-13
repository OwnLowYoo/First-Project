import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateCountry from "../components/modals/CreateCountry";
import CreateTour from "../components/modals/CreateTour";

const Admin = () => {
    const [countryVisible, setCountryVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [tourVisible, setTourVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={()=> setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
            onClick={()=> setCountryVisible(true)}
            >

                Добавить страну
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=> setTourVisible(true)}
            >
                Добавить тур
            </Button>
            <CreateType show = {typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateCountry show = {countryVisible} onHide={() => setCountryVisible(false)}/>
            <CreateTour show = {tourVisible} onHide={() => setTourVisible(false)}/>

        </Container>
    );
};

export default Admin;