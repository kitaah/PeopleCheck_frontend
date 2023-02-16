import axios from "axios";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill} from 'react-icons/bs';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditClient() {
    useEffect(() => {
    document.title = 'Modifier un client 👤';
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

  useEffect(() => {
    loadClient();
  }, []);

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
        <div className="container">
            <h1 className="text-center mb-5"><FaUserAlt className="display-4 pe-3" />Modifie un client</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow">
                    <form onSubmit={handleSubmit} className="text-light p-3">
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">Prénom</label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Prénom..."
                            name="fname"
                            defaultValue={fname}
                            onChange={onInputChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">Prénom</label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Prénom..."
                            name="fname"
                            defaultValue={lname}
                            onChange={onInputChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Genre:</label>
                                <select name="gender" class="form-select" defaultValue={gender} onChange={(e) => onInputChange(e)}>
                                <option value="">-- Sélectionner le genre --</option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                            type={"number"}
                            min="1"
                            className="form-control"
                            placeholder="Age..."
                            name="age"
                            defaultValue={age}
                            onChange={onInputChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Téléphone</label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Téléphone..."
                            name="phone"
                            defaultValue={phone}
                            onChange={onInputChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="E-mail..."
                                name="email"
                                defaultValue={email}
                                onChange={onInputChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Adresse
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                defaultValue={address}
                                onChange={onInputChange} 
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-danger mt-5 text-uppercase mx-auto d-block"><b>Envoyer</b></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center">
                <Link className="btn btn-primary mt-5 px-5 text-center mx-auto" to="/clients">
                    <BsFillArrowLeftCircleFill className="h1 align-middle"/>
                </Link>
            </div>
        </div>
    </main>
    )
}

export default EditClient