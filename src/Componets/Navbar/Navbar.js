import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../Views/Dropdown";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fs-5 bg-body-black ">
        
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#/">
            TicketTrek
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
          </div>
             <div className="mx-5 d-flex  float-end">
            <div className="navbar-nav ">
              <Link className="nav-link active " to="/home">
                Home
              </Link>
              <Link className="nav-link active" aria-current="page" to="/About">
                About
              </Link>
              <Link className="nav-link active" aria-current="page" to="/myticket">
                MyTickets
              </Link>
                          </div>
              
            <Dropdown/>
              </div> 
          
        </div>
      </nav>
    </>
  );
}
