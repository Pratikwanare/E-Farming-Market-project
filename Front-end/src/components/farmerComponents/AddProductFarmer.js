import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [farmer,setFarmer]=useState({});
    const [cdata,setCdata]=useState([]);
    const [pdata,setPdata]=useState([]);
    const [cid,setCid]=useState(0);
    const [pid,setPid]=useState(0);
    // const [fid,setFid]=useState(0);
    const [stock,setStock]=useState(0);
    const [price, setPrice] = useState(0);
    const [description,setDescription]=useState('');
    const [image,setImage] = useState(null);
    const navigate=useNavigate();
    const [msg,setMsg]=useState("");
    const location = useLocation();
    const receivedData = location.state;
    // console.log(receivedData.uid);
    // console.log(farmer.fid);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setThumbnail(file);
  // };

  let handleChange=(e)=>{
    // console.log(e);
    setCid(e);

    fetch(`http://localhost:8080/getproductsbycid?cid=${e}`)
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
                setPdata(data);
            })

  }

  let getFid=()=>{
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
            // console.log(farmer.fid);
  }

  const submitData = (e) => {
    getFid();
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify({
          fid:farmer.fid,
          pid:pid,
          stock:stock,
          price:price,
          description:description
      }),
    };

    fetch("http://localhost:8080/addfarmerproduct", reqOptions)
      .then((resp) => {
        if(resp.ok)
        {
          setMsg("Product added successfully");
        }
        else
        setMsg("failed to add product");
      })
      
  };

    useEffect(() => {
      getFid();
        fetch("http://localhost:8080/getcategories")
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
                setCdata(data);
            })
    }, []);

    let isformvalid=false;
    
    let validform=()=>{
      if(cid!=0 && pid!=0 && price!=0 && stock!=0)
      {
        isformvalid=true;
        // console.log("reached");
      }
    }
      

  return (
    <div>
        <header className="mb-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Welcome, {receivedData?.fname}
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li style={{marginRight:"600px"}}>
                    <Link to="/farmer_home" state={receivedData} class="nav-link" >Home</Link>
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
                    <button type='button' className="btn btn-primary">Search</button>
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
    <div className="container">
      
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h2 className='text-center'>Add Product</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category
              </label>
              <select onChange={(e)=> {handleChange(e.target.value);validform()}} className="form-select" style={{width:"200px",marginBottom:"20px",marginLeft:"10px"}}>
                <option value="0">--select category--</option>
                {cdata.map(cat => (
                    <option value={cat.cid}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
            <label htmlFor="productName" className="form-label">
                Product
              </label>
              <select onChange={(e)=> {setPid(e.target.value);validform()}} className="form-select" style={{width:"200px",marginBottom:"20px",marginLeft:"10px"}}
              disabled={cid==0?true:false}>
                <option value="0">--select product--</option>
                {pdata.map(product => (
                    <option value={product.pid}>{product.name}</option>
                ))}
              </select>
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
                onChange={(e) => {setPrice(e.target.value);validform()}}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={stock}
                onChange={(e) => {setStock(e.target.value);validform()}}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Description
              </label>
              <textarea
                type="number"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => {setDescription(e.target.value);validform()}}
                required
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">
                Product image
              </label>
              <input
                type="file"
                className="form-control"
                id="thumbnail"
                onChange={(e)=>{setImage(e.target.files[0]);validform()}}
                accept="image/*"
                required
              />
            </div> */}
            <button type="button" className="btn btn-primary" onClick={submitData} >
              Add Product
            </button>
          </form>
          <div id="msg" className="alert alert-success" style={{marginTop:"20px"}} >{msg}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
