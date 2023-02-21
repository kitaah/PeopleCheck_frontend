import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoMdHelpCircle } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';
import { GiHelp } from "react-icons/gi";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    return (
	<div>
		<header>
            <Navbar className="text-uppercase navbar-dark fixed-top px-5" bg="dark" expand="md">
            <Container>
                <Navbar.Brand><Link to="/"><img src={require('../medias/logo.png')} width="250" alt="PeopleCheck logo" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto text-end mt-3 mt-md-0 mt-lg-0 mt-xl-0 align-middle">
                        <Nav.Link><Link className="nav-link" to="/"><BsFillHouseDoorFill size={30} /></Link></Nav.Link>
                        <Nav.Link><Link className="nav-link px-md-2 px-lg-2 px-xl-3" to="#"><IoMdHelpCircle size={30} onClick={handleShow} /></Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to="/clients"><FaUsers size={30} /></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
	</header>
		<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title><GiHelp className="h3 pe-2" />Besoin d'aide ?</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center p-4">Vous rencontrez des problèmes avec l'application ? Contactez notre fonction support à l'adresse email suivante: <span className="line-break fw-bold">support@peoplecheck.fr</span></Modal.Body>
		</Modal>
	</div>
    )
}

export default Header