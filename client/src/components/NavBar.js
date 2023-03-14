import React, {useContext, useState} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, AGENCY_ROUTE} from "../utils/consts";
import {Button, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    }

    const handleLogoutConfirm = () => {
        logOut()
        setShowLogoutModal(false)
    }

    const handleLogoutCancel = () => {
        setShowLogoutModal(false)
    }

    return (
        <>
            <Navbar bg="warning" variant="warning">
                <Container>
                    <NavLink className="d-flex row align-items-center" style={{color: 'black'}}
                             to={AGENCY_ROUTE}>WEE</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'black'}}>
                            <Button
                                variant={"outline-dark"}
                                className="mr-2"
                                onClick={() => navigate(BASKET_ROUTE)}
                            >
                                Корзина
                            </Button>
                            {user.isAdmin ?
                                <Button
                                    variant={"outline-dark"}
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                >
                                    Админ панель
                                </Button>
                                :
                                <div></div>
                            }
                            <Button
                                variant={"outline-dark"}
                                onClick={() => setShowLogoutModal(true)}
                                className="ml-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"}
                                    onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>

            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Выход из системы</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы уверены, что хотите выйти из системы?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLogoutCancel}>
                        Нет
                    </Button>
                    <Button variant="primary" onClick={handleLogoutConfirm}>
                        Да
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
});

export default NavBar;
