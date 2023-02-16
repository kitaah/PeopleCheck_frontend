import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoMdHelpCircle } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';

function Navbar() {
  return (
    <header>
		<nav className="navbar navbar-dark bg-dark navbar-expand-md text-uppercase fixed-top px-5">
            <Link className="navbar-brand" to="/"><img src={require('../medias/logo.png')} width="250" alt="PeopleCheck logo" /></Link>
			<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbar">
				<ul className="navbar-nav ms-auto text-end mt-3 mt-md-0 mt-lg-0 mt-xl-0 align-middle">
					<li className="nav-item"><Link className="nav-link" to="/"><BsFillHouseDoorFill className="h3" /></Link></li>
					<li className="nav-item"><Link className="nav-link px-md-2 px-lg-2 px-xl-3" to="#"><IoMdHelpCircle className="h3" data-bs-toggle="modal" data-bs-target="#exampleModal" /></Link></li>
					<li className="nav-item"><Link className="nav-link px-md-2 px-lg-2 px-xl-3" to="/clients"><FaUsers className="h3" /></Link></li>
				</ul>
			</div>
		</nav>
	</header>
  )
}

export default Navbar