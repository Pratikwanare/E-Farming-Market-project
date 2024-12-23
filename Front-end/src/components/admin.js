import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ADMIN</a>
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
                    <Link to="/listfarmers" class="nav-link">Farmers</Link>
                  </li>
                  <li>
                  <Link to="/listwholesalers" class="nav-link">Wholesalers</Link>
                  </li>
                  <li>
                      <Link to="/Orderlist" class="nav-link">Order Details</Link>
                  </li>
                  <li>
                    <Link to="/FarmerU" class="nav-link">farmer in user</Link>
                  </li>

                  <li><hr className="dropdown-divider"></hr></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">type</th>
            <th scope="col">name</th>
            <th scope="col">details</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Kharanshu</td>
            <td>Wanare</td>
            <td>@Kharanshu</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Anuj</td>
            <td>Bhure</td>
            <td>@Anuj</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Gaurav</td>
            <td>Nande</td>
            <td>@Gaurav</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Shirish</td>
            <td>Ahire</td>
            <td>@Shirish</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;