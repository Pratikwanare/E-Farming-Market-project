import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

let MyProducts=()=>{

    const [fid,setFid]=useState(0);
    const[data,setdata]=useState([]);
    const navigate=useNavigate();
    const [msg,setMsg]=useState("");
    const obj = useLocation();
    const receivedData = obj.state;
    // console.log(receivedData.uid);

    useEffect(() => {
        // console.log(receivedData.uid);
        fetch(`http://localhost:8080/getfarmerbyuid?uid=${receivedData.uid}`)
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else{
                    setMsg("Failed to fetch data");
                }
            })
            .then(data => {
                // console.log(data.fid);
                setFid(data.fid);
                fetch(`http://localhost:8080/showproductsbyfid?fid=${data.fid}`)
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
                    // console.log(data);
                    setdata(data);
                })
            })
    }, []);

    const getFarmerProducts=(id)=>{
        // console.log(id)
        fetch(`http://localhost:8080/showproductsbyfid?fid=${id}`)
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
                // console.log(data);
                setdata(data);
            })
  }
//   console.log(data);
    return (
        <div>
            <header className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Welcome, {receivedData?.fname}
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
                            onClick={()=>navigate("/")}>
                            Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
            <div className="container text-center">
                <div className="row row-cols-md-4">
                {data.map(product=>(
                    <div className="col">
                    <div class="card">
                    <h4 class="card-title">{product.product.name}</h4>
                    <h6 class="card-title">{product.description}</h6>
                        <img src={`data:image/jpg;base64,${product.image}`} class="card-img-top" alt="product" height="150px"/>
                        <div class="card-body">
                        <h4>Rs. {product.price}</h4>
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

export default MyProducts;