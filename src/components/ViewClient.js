import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaAddressCard } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ViewClient() {
    useEffect(() => {
    document.title = 'Information client 👤';
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

  useEffect(() => {
    loadClient();
  }, []);

  const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/client/${id}`);
    setClient(result.data);
  };

  return (
    <main>
    <div className="container">
        <h1 className="text-center mb-5"><FaUserAlt className="display-4 pe-3" />Informations du client</h1>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-dark">
                <h2 className="text-center m-4">{client.fname} {client.lname}</h2>

                <div className="card">
                    <div className="card-header">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b><FaUserAlt className="display-6 pe-3" />Prénom: </b>
                                {client.fname}
                            </li>
                            <li className="list-group-item">
                                <b><FaUserAlt className="display-6 pe-3" />Nom: </b>
                                {client.lname}
                            </li>
                            <li className="list-group-item">
                                <b><AiOutlineFieldNumber className="display-6 pe-3" />Age: </b>
                                {client.age}
                            </li>
                            <li className="list-group-item">
                                <b><FaUserAlt className="display-6 pe-3" />Genre: </b>
                                {client.gender}
                            </li>
                            <li className="list-group-item">
                                <b><BsFillTelephoneFill className="display-6 pe-3" />Tél: </b>
                                {client.phone}
                            </li>
                            <li className="list-group-item">
                                <b><MdEmail className="display-6 pe-3" />Email: </b>
                                {client.email}
                            </li>
                            <li className="list-group-item">
                                <b><FaAddressCard className="display-6 pe-3" />Adresse: </b>
                                {client.address}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <Link className="btn btn-primary mt-5" to={"/clients"}>Retour</Link>
                </div>
            </div>
        </div>
    </div>
    </main>
    )
}

export default ViewClient