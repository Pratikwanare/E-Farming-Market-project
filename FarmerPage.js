import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FarmerModulePage = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Farmer Module</h1>
      </header>
      
      {/* Main Content */}
      <div className="row">
        {/* Left Side Vertical Navigation */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Remove Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Right Side Content */}
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          {/* Content for each section */}
          {/* You can render different content based on the selected link */}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; 2023 Farmer Module
      </footer>
    </div>
  );
}

export default FarmerModulePage;
