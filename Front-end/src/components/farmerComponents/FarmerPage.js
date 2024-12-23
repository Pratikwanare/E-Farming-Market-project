import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FarmerModule = () => {


    const [name,setName]=useState("");
    const[data,setdata]=useState([]);
    const navigate=useNavigate();

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
   
  return (
    <div>
      <div>
      <header className="mb-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h5>Welcome, {receivedData?.fname}</h5>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li style={{marginRight:"600px"}}>
                    <Link to="/farmer_home" state={receivedData} class="nav-link" >Home</Link>
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
      </div>

      {/* Content */}
      <div className="row container">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky text-center" >
            <ul className="nav flex-column">
            <li className="nav-item">
            <Link to="/farmerprofile" state={receivedData} class="nav-link">Profile</Link>
              </li>
           
              <li className="nav-item">
                <Link to="/addproduct" state={receivedData} class="nav-link">Add Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/myproducts" state={receivedData} class="nav-link">My Product</Link>
              </li>
              <li className="nav-item">
              <Link to="/#" state={receivedData} class="nav-link">Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
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
                        onClick={()=>{navigate("/showproductsfarmer",{state:{data:receivedData,cid:cat.cid}})}}>Show</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default FarmerModule;




              // <div className="col">
              //   <div class="card">
              //     <img src={DryFruits} class="card-img-top" alt="..." height="150px"/>
              //     <div class="card-body">
              //       <h5 class="card-title">Dry Fruits</h5>
              //       <p class="card-text"></p>
              //       <a href="#" class="btn btn-primary">Show</a>
              //     </div>
              //   </div>
              // </div>