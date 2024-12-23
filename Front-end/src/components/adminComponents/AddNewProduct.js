import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

let AddNewProduct=()=>{

    const[data,setdata]=useState([]);
    const navigate=useNavigate();

    const [cid,setCid]=useState(0);
    const [pname,setPname]=useState("");
    const [msg,setMsg]=useState("");
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


    const submitData = (e) => {
        e.preventDefault();
    
        const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body:JSON.stringify({
            name:pname,
            category: {
                cid: cid
            }
        
          }),
        };
    
        fetch("http://localhost:8080/addproduct", reqOptions)
          .then((resp) => {
            if(resp.ok)
            {
                setMsg("product added successfully");
            }
            else
                setMsg("already exists");
          })
          
      };
    // console.log(cid,pname);

    
    return (
        <div>
            <AdminNavbar/>


            <div style={{marginTop:"20px"}}>
            {/* <h5>select category</h5> */}
            <select onChange={(e)=> setCid(e.target.value)} className="form-select" style={{width:"200px",marginBottom:"20px",marginLeft:"10px"}}>
                <option value="0">select category</option>
                {data.map(cat => (
                    <option value={cat.cid}>{cat.name}</option>
                ))}
            </select>
            &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="product" value={pname}
                onChange={(e)=>setPname(e.target.value)}></input>&nbsp;&nbsp;
                <button onClick={submitData} className="btn btn-primary">Add</button>
                <br/>
                <div id="msg" className="alert alert-success" style={{marginTop:"20px"}} >{msg}</div>
            </div>            
        </div>
    )
}

export default AddNewProduct;