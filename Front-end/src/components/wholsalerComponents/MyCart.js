import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MyCart(){

    const navigate=useNavigate();
    const [msg,setMsg]=useState("");
    const [data,setData]=useState([]);
    const location = useLocation();
    const receivedData = location.state;

    useEffect(() => {
          fetch(`http://localhost:8080/getorderitemsbyoid?oid=1`)
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
                  setData(data);
                  console.log(data)
              })
      }, []);


    const handleQuantityChange = (itemId, newQuantity) => {
        // console.log(newQuantity);
        const updatedCart = data.map((item) =>
        item.farmer_Product.fp_id === itemId ? { ...item, qty: newQuantity } : item
        );
        setData(updatedCart);
      };

    const handleRemoveItem = (itemId) => {
        const updatedCart = data.filter((item) => item.farmer_Product.fp_id !== itemId);
        setData(updatedCart);
      };
    

    const calculateTotalPrice = () => {
        return data.reduce((total, item) => total + item.qty * item.farmer_Product.price, 0);
      };

    return (
        <div>
            <header className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Welcome, {receivedData.fname}
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
                        <Link to="/wholesaler_home" class="nav-link">Home</Link>
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
            <div className="container text-center">

            <h2>My Cart</h2>
                                
            <table className="table">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Available Quantity</th>
                    <th>Price per Unit</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                    
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.farmer_Product.fp_id}>
                        <td>{item.farmer_Product.product.name}</td>
                        <td>{item.farmer_Product.description}</td>
                        <td>{item.farmer_Product.stock}</td>
                        <td>Rs. {item.farmer_Product.price}</td>
                        <td>
                            <input
                            type="number"
                            min="0"
                            max={item.farmer_Product.stock}
                            value={item.qty}
                            onChange={(e) => handleQuantityChange(item.farmer_Product.fp_id, parseInt(e.target.value))}
                            />
                        </td>
                        <td>Rs. {item.qty * item.farmer_Product.price}</td>
                        <td>
                            <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveItem(item.farmer_Product.fp_id)}
                            >
                            Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-right">
                <h4>Total Price: Rs. {calculateTotalPrice()}</h4>
                <button className="btn btn-primary">Proceed to Buy</button>
            </div>
             </div>
        </div>
    )
}
