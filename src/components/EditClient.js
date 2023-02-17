import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";

function EditClient() {
    useEffect(() => {
    document.title = 'Modifier un client 👤';
    loadClient();
    }, []);

    let navigate = useNavigate();

    const{id} = useParams();

    const [client, setClient] = useState({
        fname: "",
        lname: "",
        gender: "",
        age: "",
        phone: "",
        email: "",
        address: "",
    });

    const { fname, lname, gender, age, phone, email, address } = client;

    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/client/${id}`, client);
        navigate("/clients");
    };

    const loadClient = async () => {
        const result = await axios.get(`http://localhost:8080/client/${id}`);
        setClient(result.data);
    };
    return (
    <main>
        <Container>
            <h1 className="text-center mb-5"><FaUserAlt className="display-4 pe-3" />Modifie un client</h1>
            <Row>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow">
                    <Form onSubmit={handleSubmit} className="text-light p-3">
                        <Form.Group className="mb-3" controlId="formEditFname">
                            <Form.Label htmlFor="fname">Prénom</Form.Label>
                            <Form.Control type={"text"} placeholder="Prénom..." name="fname" defaultValue={fname} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditLname">
                            <Form.Label htmlFor="fname" >Prénom</Form.Label>
                            <Form.Control type={"text"} placeholder="Prénom..." name="fname" defaultValue={lname} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditGender">
                            <Form.Label htmlFor="gender">Genre:</Form.Label>
                                <Form.Select name="gender" defaultValue={gender} onChange={onInputChange}>
                                    <option value="">-- Sélectionner le genre --</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditAge">
                            <Form.Label  htmlFor="age">Age</Form.Label>
                            <Form.Control type={"number"} min="1" placeholder="Age..." name="age" defaultValue={age} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditPhone">
                            <Form.Label htmlFor="phone">Téléphone</Form.Label>
                            <Form.Control type={"text"} placeholder="Téléphone..." name="phone" defaultValue={phone} onChange={onInputChange}  required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEditEmail">
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type={"text"} placeholder="E-mail..." name="email" defaultValue={email} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEdiAddress">
                            <Form.Label htmlFor="address">Adresse</Form.Label>
                            <Form.Control type={"text"} placeholder="Address" name="address" defaultValue={address} onChange={onInputChange} required/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="danger" className="mt-3 fw-bold">Envoyer</Button>
                        </div>
                    </Form>
                </div>
            </Row>
            <div className="text-center">
                <Link className="btn btn-primary mt-5 px-5 text-center mx-auto" to="/clients">
                    <BsFillArrowLeftCircleFill className="h1 align-middle"/>
                </Link>
            </div>
        </Container>
    </main>
    )
}

export default EditClient