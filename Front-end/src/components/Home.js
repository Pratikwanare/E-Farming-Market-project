import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import Navbar from "./Navbar";
import { InsertUser } from "./register";

function Home(){

    const navigate=useNavigate();
    return (
        <div>

            <Navbar/>

            {/* <nav className="navbar navbar-expand-md bg-light">
                <div className="container ">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" class="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>
    )
}

export default Home;