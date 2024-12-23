import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

let AddCategory = () => {

    const [name,setName]=useState("");
    const [msg,setMsg]=useState("");
    const[data,setdata]=useState([]);
    const navigate=useNavigate();

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

    const submit=(e)=>{
        e.preventDefault();
        // alert(name);
        const reqOptions={
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(name)
      }
        fetch("http://localhost:8080/addcategory",reqOptions)
        .then(resp=>{
            if(resp.ok)
            {
                setMsg("Category added successfully");
            }
            else
            setMsg("this category is already exists");
        })
        window.location.reload();
    }

    return (
        <div>
            <AdminNavbar/>
            <div style={{marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}}>
                <input type="text" placeholder="category" value={name}
                onChange={(e)=>setName(e.target.value)}></input>&nbsp;&nbsp;
                <button onClick={submit} className="btn btn-primary">Add</button>
                <br/>
                <div>{msg}</div>
            </div>
            <div className="text-center" style={{marginLeft:"20px"}}>
                <table class="table" style={{width:"250px"}}>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map(cat => (
                            <tr key={cat.cid}>
                                <td>{cat.cid}</td>
                                <td>{cat.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default AddCategory;