import React from 'react';
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="mt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
    <div className="container ">
        <div className="col-md-6">
        <span className="text-primary">Web Book Shop </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
       <div className="col-md-6">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/order">Order</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>

        </div>
       </div>
    </div>
</nav>
        </div>
    );
};

export default Header;