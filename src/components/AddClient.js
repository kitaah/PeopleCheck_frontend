import axios from "axios";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddClient() {
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

  const onInputChangeFirst = (e) => {
    setClient({ ...client, fname: e.target.value });
  };

  const onInputChangeSecond = (e) => {
    setClient({ ...client, lname: e.target.value });
  };

  const onInputChangeThird = (e) => {
    setClient({ ...client, gender: e.target.value });
  };

  const onInputChangeFourth = (e) => {
    setClient({ ...client, age: e.target.value });
  };

  const onInputChangeFifth = (e) => {
    setClient({ ...client, phone: e.target.value });
  };

  const onInputChangeSixth = (e) => {
    setClient({ ...client, email: e.target.value });
  };

  const onInputChangeSeventh = (e) => {
    setClient({ ...client, address: e.target.value });
  };

  const BASE_URL = "http://localhost:8080/client";
  const config = {
  headers: {
    'Content-Type': 'application/json'
  }
    };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(BASE_URL, client, config);
    navigate("/clients");
  };

  return (
    <main>
    <div className="container">
      <h1 className="text-center mb-5"><FaUserAlt className="display-4 pe-3" />Ajoute un client</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 bg-dark shadow">
          <form onSubmit={(e) => onSubmit(e)} className="text-light p-3">
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">Prénom</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Prénom..."
                name="fname"
                defaultValue={fname}
                onChange={(e) => onInputChangeFirst(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">Nom</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Nom..."
                name="lname"
                defaultValue={lname}
                onChange={(e) => onInputChangeSecond(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Genre</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Genre..."
                name="gender"
                defaultValue={gender}
                onChange={(e) => onInputChangeThird(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Age..."
                name="age"
                defaultValue={age}
                onChange={(e) => onInputChangeFourth(e)}
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
                onChange={(e) => onInputChangeFifth(e)}
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
                onChange={(e) => onInputChangeSixth(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Adresse</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Address"
                name="address"
                defaultValue={address}
                onChange={(e) => onInputChangeSeventh(e)}
              />
            </div>
            <button type="submit" className="btn btn-danger mt-3">
              <b>Envoyer</b>
            </button>
          </form>
        </div>
      </div>
      <Link className="btn btn-primary mt-5 px-5" to="/clients">
          <BsFillArrowLeftCircleFill className="h1 align-middle"/>
      </Link>
    </div>
    </main>
  );
}

export default AddClient