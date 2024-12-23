import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Wholesalers() {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7063/api/Wholesalers")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
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
                    <Link to="/listfarmers" class="nav-link">Farmers Details</Link>
                  </li>
                  <li>
                  <Link to="/listwholesalers" class="nav-link">Wholesalers Details</Link>
                  </li>
                  <li>
                      <Link to="/Orderlist" class="nav-link">Order Details</Link>
                  </li>
                  <li>
                  <Link to="/User" class="nav-link">User Details</Link>
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

            </div>

            <h2>Wholesalers</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">wid</th>
                        <th scope="col">uid</th>
                        <th scope="col">pincode</th>
                        <th scope="col">area</th>
                        <th scope="col">city</th>
                        <th scope="col">bdate</th>
                        <th scope="col">panNo</th>
                        <th scope="col">aadharNo</th>                       
                        <th scope="col">status</th>  
                        

                    </tr>
                </thead>
                <tbody>
                    {data.map(Wholesalersdata => (
                        <tr key={Wholesalersdata.wid}>
                            <td>{Wholesalersdata.wid}</td>            
                            <td>{Wholesalersdata.uid}</td>
                            <td>{Wholesalersdata.pincode}</td>                
                            <td>{Wholesalersdata.area}</td>
                            <td>{Wholesalersdata.city}</td>
                            <td>{Wholesalersdata.bdate}</td>
                            <td>{Wholesalersdata.panNo}</td>
                            <td>{Wholesalersdata.aadharNo}</td>
                            <td>{Wholesalersdata.status}</td>

                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );

}

export default Wholesalers;