import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import ViewAllClients from "./components/ViewAllClients";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";
import ViewClient from "./components/ViewClient";
import Footer from './layout/Footer';
import { GiHelp } from "react-icons/gi";

function App() {
  return (
    <div className="App bg-success text-light">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/clients" element ={<ViewAllClients/>}/>
        <Route exact path="/ajoutclient" element ={<AddClient/>}/>
        <Route exact path="/modificationclient/:id" element={<EditClient />} />
        <Route exact path="/consultationclient/:id" element={<ViewClient />} />
        </Routes>
      <Footer />
      </Router>
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered text-dark" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><GiHelp className="h3 pe-2" />Besoin d'aide ?</h5>
                <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
            </div>
              <div className="modal-body">
                <p className="px-3">En cas de problèmes avec l'application, merci de prendre contact avec notre assistance à l'adresse e-mail suivante: <span className="fw-bold line-break">support@peoplecheck.fr</span></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
