<<<<<<< HEAD
import React, { useEffect } from 'react';
import Fruits from '../../images/Fruits.jpg'
import DryFruits from '../../images/DryFruits.jpg'
import Grains from '../../images/Grains.jpg'
import Vegetables from '../../images/Vegetables.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WholeNavbar from './WholeNavbar';
>>>>>>> anuj

const WholesellerModule = () => {

  const navigate=useNavigate();

<<<<<<< HEAD
  const navigation=(data)=>{
      navigate("/showproducts",{stat:{cid:data}})
  }
=======
    const [name,setName]=useState("");
    const[data,setdata]=useState([]);
    const location = useLocation();
    const receivedData = location.state;

    useEffect(() => {
      
        fetch("http://localhost:8080/getcategories")
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else{
                    throw new Error("Failed to fetch data");
                }
            })
            .then(data => {
                setdata(data);
            })
    }, []);
>>>>>>> anuj

  return (
    <div>

      {/* Header */}
<<<<<<< HEAD
      <header className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Welcome, wholesaler
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
=======
      <WholeNavbar/>
>>>>>>> anuj
     
        <div className="container">
      {/* Content */}
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/wholesalerprofile" state={receivedData} class="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Order
                </a>
              </li>
              <li className="nav-item">
              <Link to="/mycart" state={receivedData} class="nav-link">My cart</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
<<<<<<< HEAD
          {/* Add Product and Uploaded Product content here */}
          <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col">
                <div class="card">
                  <img src={DryFruits} class="card-img-top" alt="..." height="150px"/>
                  <div class="card-body">
                    <h5 class="card-title">Dry Fruits</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" onClick={()=>{navigation(9)}}>Buy</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src={Grains} class="card-img-top" alt="..." height="150px"/>
                  <div class="card-body">
                    <h5 class="card-title">Grains</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" onClick={()=>{navigation(6)}}>Buy</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src={Vegetables} class="card-img-top" alt="..." height="150px"/>
                  <div class="card-body">
                    <h5 class="card-title">Vegetables</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" onClick={()=>{navigation(2)}}>Buy</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src={Fruits} class="card-img-top" alt="..." height="150px"/>
                  <div class="card-body">
                    <h5 class="card-title">Fruits</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" onClick={()=>{navigation(1)}}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
=======
            {/* Add Product and Uploaded Product content here */}

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {data.map(cat=>(
                    <div className="col">
                    <div class="card">
                        <img src={`data:image/jpg;base64,${cat.image}`} class="card-img-top" alt="product" height="150px"/>
                        <div class="card-body">
                        <h5 class="card-title">{cat.name}</h5>
                        <p class="card-text"></p>
                        <button type="button" className="btn btn-primary"
                        onClick={()=>{navigate("/showproductswhole",{state:{data:receivedData,cid:cat.cid}})}}>Show</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </main>
>>>>>>> anuj
      </div>
    </div>
    </div>
    
  );
};

export default WholesellerModule;
