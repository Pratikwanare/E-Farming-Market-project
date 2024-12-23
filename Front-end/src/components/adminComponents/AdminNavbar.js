import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminNavbar(){

    const navigate=useNavigate();
    const location = useLocation();
    const receivedData = location.state;
    
    return(
        <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Welcome, {receivedData?.fname}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
              <li className="nav-item">
              <Link to="/admin_home" class="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lists
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/listfarmers" class="nav-link">Farmers Details</Link>
                  </li>
                  <li>
                  <Link to="/listwholesalers" class="nav-link">Wholesalers Details</Link>
                  </li>
                  <li>
                      <Link  class="nav-link">Order Details</Link>
                  </li>
                  <li>
                  <Link to="/User" class="nav-link">User Details</Link>
                  </li>
                  <li><hr className="dropdown-divider"></hr></li>
                </ul>
              </li>
              <li>
                <Link to="/addcategory" class="nav-link" >Add Category</Link>
              </li>
              <li style={{marginRight:"300px"}}>
                <Link to="/addnewproduct" class="nav-link" >Add Product</Link>
              </li>
            
              <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <li>
                <button type='button' className="btn btn-primary">Search</button>
              </li>
            </form>
              
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

        </div>
    )
}