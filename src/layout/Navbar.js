import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoMdHelpCircle } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';
import { GiHelp } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Navbar() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
	<div>
		<header>
			<nav className="navbar navbar-dark bg-dark navbar-expand-md text-uppercase fixed-top px-5">
				<Link className="navbar-brand" to="/"><img src={require('../medias/logo.png')} width="250" alt="PeopleCheck logo" /></Link>
				<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse" id="navbar">
					<ul className="navbar-nav ms-auto text-end mt-3 mt-md-0 mt-lg-0 mt-xl-0 align-middle">
						<li className="nav-item"><Link className="nav-link" to="/"><BsFillHouseDoorFill className="h3" /></Link></li>
						<li className="nav-item"><Link className="nav-link px-md-2 px-lg-2 px-xl-3" to="#"><IoMdHelpCircle className="h3" onClick={handleShow} /></Link></li>
						<li className="nav-item"><Link className="nav-link px-md-2 px-lg-2 px-xl-3" to="/clients"><FaUsers className="h3" /></Link></li>
					</ul>
				</div>
			</nav>
		</header>
		<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title><GiHelp className="pe-2" />Besoin d'aide ?</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center p-4">Vous rencontrez des problèmes avec l'application ? Contactez notre fonction support à l'adresse email suivante: <span className="line-break fw-bold">support@peoplecheck.fr</span></Modal.Body>
		</Modal>
	</div>
	)
}

export default Navbar