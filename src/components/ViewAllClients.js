import React, { useEffect, useState } from 'react';
import { FaUsers, FaEye, FaEdit, FaSearch } from 'react-icons/fa';
import { BsFillPlusCircleFill, BsTrashFill } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function ViewAllClients() {
    const [clients,setClients] = useState([]);
    useEffect(() => {
        document.title = 'Liste des clients 👤';
        loadClients();
    }, []);

    const[search, setSearch] = useState('');

    const { id } = useParams();

    const loadClients = async() => {
        const result = await axios.get("http://localhost:8080/clients");
        setClients(result.data);
    }

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:8080/client/${id}`);
        loadClients();
    };

    return (
    <main>
        <Container className="text-center">
            <h1 className="mb-5"><FaUsers className="pe-3" size={65} />Liste des clients</h1>
            <Link className="btn btn-primary mb-3" to="/ajoutclient"><BsFillPlusCircleFill className="me-2" />Ajoute un client</Link>
            <Form className="d-flex align-items-center justify-content-center align-middle my-3">
                <Stack direction="horizontal" gap={3}>
                <FaSearch size={30} />
                <Form.Control onChange={(e) =>setSearch(e.target.value)}  type="search" className="search-bar" placeholder="Cherche un nom..."/>
                </Stack>
            </Form>
            <Table className="table table-hover table-responsive shadow table-light">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Age</th>
                        <th scope="col">Tél.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
            {
                clients.filter((client) => {
                    return search.toLowerCase()  === ''
                    ? client : client.lname.toLowerCase().includes(search);
                }).map((client, index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{client.fname}</td>
                        <td>{client.lname}</td>
                        <td>{client.gender}</td>
                        <td>{client.age}</td>
                        <td>{client.phone}</td>
                        <td>{client.email}</td>
                        <td>{client.address}</td>
                        <td>
                            <Link className="btn btn-success" to={`/consultationclient/${client.id}`} title="Voir"><FaEye size={20} /></Link>
                            <Link className="btn btn-primary my-2 mx-4" to={`/modificationclient/${client.id}`} title="Modifier">< FaEdit size={20} /></Link>
                            <Button variant="danger" onClick={() => deleteClient(client.id)} title="Supprimer"><BsTrashFill size={20} /></Button>
                        </td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
        </Container>
    </main>
    )
}

export default ViewAllClients