import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileForm = () => {
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
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center">Profile Form</h2>
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
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.birthDate}
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
                value={formData.area}
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
                value={formData.city}
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
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default ProfileForm;
