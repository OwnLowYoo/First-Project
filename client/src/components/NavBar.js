import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, AGENCY_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
    const{user} = useContext(Context)
    const navigate = useNavigate()
    return (


<Navbar bg="dark" variant="dark">
    <Container>
        <NavLink style = {{color:'white'}} href = {AGENCY_ROUTE}>Wee</NavLink>
        {user.isAuth ?
            <Nav className= "ml-auto" style = {{color: 'white'}}>
                <Button
                    variant={"outline-light"}
                    onClick={() => navigate(ADMIN_ROUTE)}
                    >
                    Админ панель
                </Button>
                <Button
                    variant={"outline-light"}
                    onClick={() => navigate(LOGIN_ROUTE)}
                    className= "ml-2"
                >
                    Выйти
                </Button>
            </Nav>
            :
            <Nav
                className= "ml-auto"
                style = {{color: 'white'}}>
                <Button
                    variant={"outline-light"}
                    onClick={() => user.setIsAuth(true)}>Авторизация
                </Button>
            </Nav>
        }
    </Container>

</Navbar>
    );
});

export default NavBar;