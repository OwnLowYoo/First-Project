import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const CountryBar = observer (() => {
    const {tour} = useContext(Context)

    return (
        <Row className="d-flex">
            {tour.countries.map(country =>
            <Card
                style = {{cursor:"pointer"}}
                key = {country.id}
                className="p-3"
                onClick={() => tour.setSelectedCountry(country)}
                border = {country.id === tour.selectedCountry.id ? 'danger' : 'light' }
                >
                {country.name}
            </Card>
                )}

        </Row>

    );
});


export default CountryBar;