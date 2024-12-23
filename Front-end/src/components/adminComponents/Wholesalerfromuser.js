import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function WholesalersU()
{
    const[data,setdata]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const [msg,setMsg]=useState("");
    const location = useLocation();
    const receivedData = location.state;


    useEffect(() => {
      
        fetch("https://localhost:7063/api/Users/getwholesaler")
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
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>        

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
              <Link to="/admin_home" state={receivedData} class="nav-link">Home</Link>
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
                  <Link to="/user" class="nav-link">User Details</Link>
                  </li>
                  <li>
                    <Link to="/admin" class="nav-link">Admin Details</Link>
                  </li>
                  <li><hr className="dropdown-divider"></hr></li>
                </ul>
              </li>
              <li>
                <Link to="/addcategory" state={receivedData} class="nav-link" >Add Category</Link>
              </li>
              <li style={{marginRight:"300px"}}>
                <Link to="/addnewproduct" state={receivedData} class="nav-link" >Add Product</Link>
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

            <h2>Wholesalers</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">uid</th>
                        <th scope="col">fname</th>
                        <th scope="col">lname</th>
                        <th scope="col">email</th>
                        <th scope="col">contact</th>
                        {/* <th scope="col">type</th> */}
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map(wolesalerdata => (
                        <tr key={wolesalerdata.uid}>
                            <td>{wolesalerdata.uid}</td>
                           
                            <td>{wolesalerdata.fname}</td>
                            
                            <td>{wolesalerdata.lname}</td>
                            <td>{wolesalerdata.email}</td>
                            <td>{wolesalerdata.contact}</td>
                            {/* <td>{wolesalerdata.type}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}

export default WholesalersU;