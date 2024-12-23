import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FarmerProfileForm = () => {

  const location = useLocation();
    const receivedData = location.state;
  const [farmer,setFarmer]=useState({});
  const [msg,setMsg]=useState("");

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    pincode: '',
    area: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or validation here
    // console.log(formData);
  };

  const navigate=useNavigate();

  useEffect(() => {
      
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
                setFarmer(data);
            })
}, []);

  return (
    <div>
      {/* Header */}
      <header className="mb-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Welcome, farmer
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
                  <Link to="/farmer_home" class="nav-link">Home</Link>
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
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center">Your Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={receivedData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={receivedData.lname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={farmer.bdate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="area" className="form-label">
                Area
              </label>
              <input
                type="text"
                className="form-control"
                id="area"
                name="area"
                value={farmer.area}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={farmer.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                value={farmer.pincode}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfileForm;
