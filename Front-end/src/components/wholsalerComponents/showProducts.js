import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const ShowProducts = (state) => {

  const location=useLocation();

//   useEffect(() => {
//     // Fetch data from the /getroom endpoint
//     fetch("http://localhost:8080/getproductsbycid?cid=")
//         .then(response => response.json())
//         .then(data => {
//             setroom(data);
//             setLoading(false);
//         })
//         .catch(error => {
//             setError(error.message);
//             setLoading(false);
//         });
// }, []);


  return (
    <div>
      {location.stat.cid}

    </div>
    );
};

export default ShowProducts;
