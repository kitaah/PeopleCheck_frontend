import axios from "axios";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddClient() {
  useEffect(() => {
    document.title = 'Ajouter un client 👤';
  }, []);

  let navigate = useNavigate();

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

  const handleSubmit =  async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/client", client);
    navigate("/clients");
  };

  return (
    <main>
      <Container>
        <h1 className="text-center mb-5"><FaUserAlt className="display-4 pe-3" />Ajoute un client</h1>
        <Row>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow px-5">
            <Form onSubmit={handleSubmit} className="text-light p-3">
              <Form.Group className="mb-3" controlId="formAddFname">
                <Form.Label htmlFor="fname">Prénom</Form.Label>
                <Form.Control type={"text"} placeholder="Prénom..." name="fname" defaultValue={fname} onChange={onInputChange} required/>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formAddLname">
              <Form.Label htmlFor="lname" >Nom</Form.Label>
              <Form.Control type={"text"} placeholder="Nom..." name="lname" defaultValue={lname} onChange={onInputChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddGender">
              <Form.Label htmlFor="gender">Genre:</Form.Label>
                <Form.Select name="gender" defaultValue={gender} onChange={onInputChange} required>
                  <option value="">-- Sélectionner le genre --</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddAge">
                <Form.Label htmlFor="age">Age</Form.Label>
                <Form.Control type={"number"} min="1" placeholder="Age..." name="age" defaultValue={age} onChange={onInputChange} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddPhone">
                <Form.Label htmlFor="phone">Téléphone</Form.Label>
                <Form.Control type={"text"} placeholder="Téléphone..." name="phone" defaultValue={phone} onChange={onInputChange} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddEmail">
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control type={"text"} placeholder="E-mail..." name="email" defaultValue={email} onChange={onInputChange} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddAddress">
                <Form.Label htmlFor="address">Adresse</Form.Label>
                <Form.Control type={"text"} placeholder="Address" name="address" defaultValue={address} onChange={onInputChange} required/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="danger" className="fw-bold mt-3">Envoyer</Button>
              </div>
            </Form>
          </div>
        </Row>
        <div className="text-center">
        <Link className="btn btn-primary mt-5 px-5" to="/clients">
            <BsFillArrowLeftCircleFill className="h1 align-middle"/>
        </Link>
        </div>
      </Container>
    </main>
  );
}

export default AddClient