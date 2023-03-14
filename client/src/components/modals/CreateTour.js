import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createTour, fetchCountries, fetchTypes} from "../../http/tourAPI";
import {observer} from "mobx-react-lite";



const CreateType = observer (({show, onHide}) => {
    const {tour} = useContext(Context)
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [file,setFile] = useState(null)
    const [info,setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => tour.setTypes(data))
        fetchCountries().then(data => tour.setCountries(data))
    }, [])


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addTour = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('countryId', tour.selectedCountry.id)
        formData.append('typeId', tour.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createTour(formData).then(data => onHide())

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
                            {tour.selectedType.name || "Выберите тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tour.types.map(type =>
                            <Dropdown.Item
                                onClick={() => tour.setSelectedType(type)}
                                key = {type.id}
                            >
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {tour.selectedCountry.name || "Выберите страну"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tour.countries.map(country =>
                                <Dropdown.Item
                                    onClick={() => tour.setSelectedCountry(country)}
                                    key = {country.id}
                                >
                                    {country.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value = {name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название тура"
                    />
                    <Form.Control
                        value = {price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость тура"
                        type = "number"
                    />
                    <Form.Control
                        className="mt-3"
                        type = "file"
                        onChange = {selectFile}
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
                            value = {i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                            placeholder="Введите название"
                            />
                    </Col>
                        <Col md = {4}>
                            <Form.Control
                                value = {i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant="outline-success" onClick={addTour}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateType;