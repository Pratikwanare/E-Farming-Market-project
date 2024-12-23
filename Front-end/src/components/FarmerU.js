import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import 


function FarmerfromUser()
{
    const[data,setdata]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      
        fetch("https://localhost:7063/api/Users/getallfarmersfromuser")
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
            
            <h1>Farmers List</h1>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">fid</th>
                        <th scope="col">uid</th>
                        <th scope="col">pincode</th>
                        <th scope="col">area</th>
                        <th scope="col">city</th>
                        <th scope="col">bdate</th>
                        <th scope="col">panNo</th>
                        <th scope="col">registeredAt</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(farmerdata => (
                        <tr key={farmerdata.fid}>
                            <td>{farmerdata.fid}</td>
                           
                            <td>{farmerdata.uid}</td>
                            
                            <td>{farmerdata.pincode}</td>
                            <td>{farmerdata.area}</td>
                            <td>{farmerdata.city}</td>
                            <td>{farmerdata.bdate}</td>
                            <td>{farmerdata.panNo}</td>
                            <td>{farmerdata.registeredAt}</td>
                            <td>{farmerdata.status}</td>
                     
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}

export default FarmerfromUser;
