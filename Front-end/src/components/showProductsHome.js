import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

let ShowProductsHome=()=>{

    const[data,setdata]=useState([]);
    const home = useLocation();
  const receivedData = home.state;

    useEffect(() => {
        
        fetch(`http://localhost:8080/getfarmerproductsbycid?cid=${receivedData}`)
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
            <Navbar/>
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
                      <h4>${product.price}</h4>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )

}

export default ShowProductsHome;