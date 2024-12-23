import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, useLocation } from 'react-router-dom';

const ShowProductsWholesaler = (state) => {

  const[data,setdata]=useState([]);
    const wholesaler = useLocation();
  const receivedData = wholesaler.state;
  // console.log(receivedData.cid);

    useEffect(() => {
        
        fetch(`http://localhost:8080/getfarmerproductsbycid?cid=${receivedData.cid}`)
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

    return(
        <div>
            <header className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Welcome, {receivedData.data?.fname}
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li style={{marginRight:"600px"}}>
                            <Link to="/farmer_home" class="nav-link" >Home</Link>
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
                            <button type='button' className="btn btn-primary">Search</button>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <button className="btn btn-outline-primary me-2"
                            onClick={()=>Navigate("/")}>
                            Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
            <br/>
            <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              {data.map(product=>(
                <div className="col">
                  <div class="card">
                  <h4 class="card-title">{product.product.name}</h4>
                  <h6 class="card-title">{product.description}</h6>
                    <img src={`data:image/jpg;base64,${product.image}`} class="card-img-top" alt="product" height="150px"/>
                    <div class="card-body">
                      <h4>Rs. {product.price}</h4>
                      <button type="button" className="btn btn-primary">Add to cart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" className="btn btn-warning">Buy</button>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
};

export default ShowProductsWholesaler;
