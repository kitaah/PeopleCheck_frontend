import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import ViewAllClients from "./components/ViewAllClients";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";
import ViewClient from "./components/ViewClient";
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App bg-success text-light">
      <Router>
      <Header/>
        <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/clients" element ={<ViewAllClients/>}/>
        <Route exact path="/ajoutclient" element ={<AddClient/>}/>
        <Route exact path="/modificationclient/:id" element={<EditClient />} />
        <Route exact path="/consultationclient/:id" element={<ViewClient />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
