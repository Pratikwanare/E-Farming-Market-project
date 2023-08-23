import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Farmer_home = () => {
  return (
    <div>
      {/* Header */}
      
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">All Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Content */}
      <div className="container py-4">
        {/* Your content goes here */}
      </div>
      <div style={{height:"300px"}}>

      </div>
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2023 Farmer Module
      </footer>
    </div>
  );
}

export default Farmer_home;