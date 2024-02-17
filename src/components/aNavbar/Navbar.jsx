import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setCenter }) => {
   const handleLogin = e => {
      e.preventDefault();
      setCenter("center");
   };

   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
            <a
               className="navbarbrand"
               href="/"
            >
               <i>VideoZone</i>
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                     >
                        <span
                           data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent"
                        >
                           Početna
                        </span>
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        className="nav-link"
                        to="/zanrovi"
                     >
                        <span
                           data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent"
                        >
                           Žanrovi
                        </span>
                     </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        Opcije
                     </a>
                     <ul className="dropdown-menu">
                        <li>
                           <a
                              className="dropdown-item"
                              href="/"
                              onClick={e => handleLogin(e)}
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                           >
                              Profil
                           </a>
                        </li>
                        <li>
                           <a
                              className="dropdown-item"
                              href="/"
                              onClick={e => handleLogin(e)}
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                           >
                              Dodatne opcije
                           </a>
                        </li>

                        <li>
                           <hr className="dropdown-divider" />
                        </li>
                        <li>
                           <a
                              className="dropdown-item"
                              href="/"
                              onClick={e => handleLogin(e)}
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                           >
                              Prijavi se
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
