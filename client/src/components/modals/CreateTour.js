import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateType = ({show, onHide}) => {
    const {tour} = useContext(Context)
    const [info,setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size = "lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить новый тур
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Выберите тип
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tour.types.map(type =>
                            <Dropdown.Item
                                key = {type.id}
                            >
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Выберите страну
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tour.countries.map(country =>
                                <Dropdown.Item
                                    key = {country.id}
                                >
                                    {country.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название тура"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость тура"
                        type = "number"
                    />
                    <Form.Control
                        className="mt-3"
                        type = "file"
                    />
                    <hr/>
                    <Button
                    variant="outline-dark"
                    onClick = {addInfo}
                    >
                        Добавить новое описание
                    </Button>
                    {info.map(i =>
                    <Row className="mt-4" key={i.number}>
                    <Col md = {4}>
                        <Form.Control
                            placeholder="Введите название"
                            />
                    </Col>
                        <Col md = {4}>
                            <Form.Control
                                placeholder="Введите название"
                            />
                        </Col>
                        <Col md={4}>
                            <Button
                                onClick={() => removeInfo(i.number)}
                                variant={"outline-danger"}
                            >
                                Удалить описание
                            </Button>
                        </Col>
                    </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );
};

export default CreateType;