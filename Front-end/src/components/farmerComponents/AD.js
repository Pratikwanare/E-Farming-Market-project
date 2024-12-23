import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const init = {
    p_name: '',
    p_desc: '',
    price: '',
    b_name: '',
    c_id: 0,
    quantity: '',
    v_id: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const uid = JSON.parse(localStorage.getItem('loggedUser')).uid;
  const pwd = JSON.parse(localStorage.getItem('loggedUser')).pwd;

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...info,
        uid: uid,
        pwd: pwd,
      }),
    };

    fetch('http://localhost:8080/addProduct', reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error('server error');
      })
      .then((obj) => {
        const fd = new FormData();
        fd.append('file', file);
        const reqOptions1 = {
          mode: 'no-cors',
          method: 'POST',
          body: fd,
        };
        fetch('http://localhost:8080/uploadImage/' + obj.p_id, reqOptions1)
          .then((resp) => resp.json())
          .then((obj) => {
            if (obj) {
              alert('Image uploaded successfully');
              navigate('/');
            } else {
              alert('Reg Successful. Image is not Updated, Try Later');
              navigate('/');
            }
          });
        alert('Product added successfully..');
        navigate('/');
      })
      .catch((error) => alert('Server error. Try Later' + error));
  };

  return (
    <div className="container my-5">
      <h1 className="bg-danger text-white text-center">Welcome Vendor: {uid}</h1>
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="c_id" className="form-label">
            Select Category:
          </label>
          <select
            className="form-select"
            id="c_id"
            name="c_id"
            value={info.c_id}
            onChange={(e) => {
              dispatch({ type: 'update', fld: 'c_id', val: e.target.value });
            }}
          >
            <option value={0}>Select category</option>
            <option value={1}>Fruits</option>
            <option value={2}>Vegetable</option>
            <option value={3}>Grains</option>
          </select>
        </div>
        {/* Add other form inputs here */}
        {/* ... */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Product Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mx-2">
            Upload Product
          </button>
          <button type="reset" className="btn btn-secondary mx-2" onClick={() => dispatch({ type: 'reset' })}>
            Clear
          </button>
        </div>
      </form>
      <p>{JSON.stringify(info)}</p>
      <p>{file && file.name}</p>
    </div>
  );
}

export default AddProduct;
