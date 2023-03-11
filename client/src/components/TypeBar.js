import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
   const {tour} = useContext(Context)
    return (
            <ListGroup>
                {tour.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active = {type.id === tour.selectedType.id}
                    onClick = {() => tour.setSelectedType(type)}
                    key = {type.id}
                >
                    {type.name}
                </ListGroup.Item>
                    )}
            </ListGroup>
    );
});

export default TypeBar;