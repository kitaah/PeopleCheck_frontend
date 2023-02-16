import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

<div data-aos="fade-right" data-aos-delay="100" data-aos-duration="4000">
    <main className="main-page">
        <h1 className="mb-5 px-5">Bienvenue chez PeopleCheck</h1>
        <h2 className="mb-3 px-5">Accède à la liste des clients !</h2>
        <Link className="btn btn-danger fw-bold text-uppercase border border-warning py-2 my-4 link-to-allclients" to="/clients"><span className="h4">Espace de gestion</span></Link>
        <p className="px-5 h5 pt-3">Accède à l'espace de gestion pour consulter l'ensemble des clients.</p>
        <p className="px-5 pb-3 h5">Tu pourras également ajouter, consulter, <span className="line-break">modifier ou supprimer un client de ton choix !</span></p>
        <FaUsers className="display-3" />
    </main>
</div>
  )
}
export default Home