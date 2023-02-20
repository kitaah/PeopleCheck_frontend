import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUserAlt, FaAddressCard } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function ViewClient() {
    useEffect(() => {
    document.title = 'Information client 👤';
    loadClient();
    }, []);

    const [client, setClient] = useState({
    fname: "",
    lname: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    });

    const { id } = useParams();

    const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/client/${id}`);
    setClient(result.data);
    };

    return (
    <main>
        <Container>
            <h1 className="text-center mb-5"><FaUserAlt className="pe-3" size={60} />Informations du client</h1>
            <Row>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-dark">
                    <Card.Body>
                        <Card.Text>
                            <Card.Title className="text-center m-4">{client.fname} {client.lname}</Card.Title>
                            <ul className="list-group list-group-flush rounded">
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Prénom: </b>
                                    {client.fname}
                                </li>
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Nom: </b>
                                    {client.lname}
                                </li>
                                <li className="list-group-item">
                                    <b><AiOutlineFieldNumber className="pe-3" size={40} />Age: </b>
                                    {client.age}
                                </li>
                                <li className="list-group-item">
                                    <b><FaUserAlt className="pe-3" size={40} />Genre: </b>
                                    {client.gender}
                                </li>
                                <li className="list-group-item">
                                    <b><BsFillTelephoneFill className="pe-3" size={40} />Tél: </b>
                                    {client.phone}
                                </li>
                                <li className="list-group-item">
                                    <b><MdEmail className="pe-3" size={40} />Email: </b>
                                    {client.email}
                                </li>
                                <li className="list-group-item">
                                    <b><FaAddressCard className="pe-3" size={40} />Adresse: </b>
                                    {client.address}
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <div className="text-center">
                        <Link className="btn btn-primary mt-5" to={"/clients"}>Retour</Link>
                    </div>
                </div>
            </Row>
        </Container>
    </main>
    )
}

export default ViewClient