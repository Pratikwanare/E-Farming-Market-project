import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform the logic to submit the form data
    // For example, sending the data to a server using an API call
  };

const navigate=useNavigate();

  return (
    <div className="container">
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
     
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h2 className='text-center'>Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description
              </label>
              <textarea
                className="form-control"
                id="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">
                Thumbnail
              </label>
              <input
                type="file"
                className="form-control"
                id="thumbnail"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
