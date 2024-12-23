import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function WholeNavbar(){

    const navigate=useNavigate();
    const location = useLocation();
    const receivedData = location.state;
    // console.log(receivedData.fname);

    return (
        <div>
            <header className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Welcome, {receivedData?.fname}
                        </a>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li>
                            <Link to="/wholesaler_home" class="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
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
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li className="nav-item">
                            <button className="btn btn-outline-primary me-2"
                                onClick={()=>navigate("/")}>
                                Logout
                                </button>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}