import React, { useEffect, useState } from 'react';
import Fruits from '../images/Fruits.jpg'
import DryFruits from '../images/DryFruits.jpg'
import Grains from '../images/Grains.jpg'
import Vegetables from '../images/Vegetables.jpg'

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./Login";
import Navbar from "./Navbar";
import { InsertUser } from "./register";

function Home(){

    const navigate=useNavigate();

    const [name,setName]=useState("");
    const[data,setdata]=useState([]);

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


    return (
        <div>
            <Navbar/>
            <div>&nbsp;</div>
            <div className='row container'>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
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
                            onClick={()=>{navigate("/showproductshome",{state:cat.cid})}}>Show</button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                </main>
            </div>
        </div>
    )
}

export default Home;