import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container ">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" class="nav-link">Register</Link>
                        </li>
                        
                        <li className="nav-item" style={{marginLeft:'100px'}}>
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Search"
                            />
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                            <button className="btn btn-primary">Search</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}