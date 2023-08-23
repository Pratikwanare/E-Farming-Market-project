import React, {useReducer,useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Route,Routes,useNavigate } from 'react-router-dom';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
function InsertUser() {

    const init={
        type:"",
        fname:"",
        lname:"",
        bdate:"",
        email:"",
        contact:"",
        password:"",
        confirmPassword:"",
        area:"",
        city:"",
        pincode:"",
        pan_no:"",
        aadhar_no:""
    }

    const reducer=(state,action) =>{
        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val}
            case 'reset':
                return init;
            default:
                return 0;
        }
    }

    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");

    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        const reqOpitions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                pincode: info.pincode,
                area: info.area,
                city: info.city,
                pan_no: info.pan_no,
                aadhar_no: info.aadhar_no,
                bdate: info.bdate,
                user: {
                    fname: info.fname,
                    lname: info.lname,
                    password: info.password,
                    email: info.email,
                    contact: info.contact,
                    type:info.type
                }
            })
        }

        if(info.type==='f')
        {
            fetch("http://localhost:8080/registerfarmer",reqOpitions)
            .then(resp => {
                if(resp.ok)
                {
                    <div>
                        <h3 className="text-success">Registration Successful...</h3>
                        <input className="btn btn-primary" type="button">go to login</input>
                    </div>
                    navigate("/login");
                }
                else{
                    setMsg("This user id already registered.");
                }
            }) 
        }
        else if(info.type==='w')
        {
            fetch("http://localhost:8080/registerwholesaler",reqOpitions)
            .then(resp => {
                if(resp.ok)
                {
                    navigate("/login");
                }
                else{
                    setMsg("This user id already registered.");
                }
            }) 
        }
        else
        {
            setMsg("please select 'register as' field");
        }
    }

    // const [isfarmer,setIsfarmer] = useState(false);
    // const [iswholesaler,setIswholesaler] = useState(false);
    // let selectedtype=(val)=>{
    //     info.type.value=val;
    // }

    return(
      
        <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Register</h3>
                        <form>
                            <div className="form-body">
                                <div className="type">
                                    <label className="form__label" for="type">Register as</label>
                                    <input className="form__input" name="type" type="radio" id="type" value="f"
                                    //onClick={(e)=>{info.type.value=e.target.value}}
                                    onClick={(e)=>{dispatch({type:'update', fld:'type', val:e.target.value})}}
                                    />Farmer&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input className="form__input" name="type" type="radio" id="type" value="w"
                                    //onClick={(e)=>{info.type.value=e.target.value}}
                                    onClick={(e)=>{dispatch({type:'update', fld:'type', val:e.target.value})}}
                                    />Wholesaler
                                    <div id="typeerr" className="form-text"></div>
                                </div>
                                <div className="firstname">
                                    <label className="form__label" for="fname">First Name </label>
                                    <input className="form__input" name="fname" type="text" id="fname" value={info.fname} placeholder="First Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'fname', val:e.target.value})}}/>
                                    <div id="fnameerr" className="form-text"></div>
                                </div>
                                <div className="lastname">
                                    <label className="form__label" for="lname">Last Name </label>
                                    <input  type="text" name="lname" id="lname"  className="form__input" value={info.lname} placeholder="Last Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'lname', val:e.target.value})}}/>
                                    <div id="lnameerr" className="form-text"></div>
                                </div>
                                <div className="bdate">
                                    <label className="form__label" for="bdate">Birth Date </label>
                                    <input type="date" id="bdate" name="bdate" className="form__input" value={info.bdate} placeholder="Birth Date"
                                    onChange={(e)=>{dispatch({type:'update', fld:'bdate', val:e.target.value})}}/>
                                    <div id="bdateerr" className="form-text"></div>
                                </div>
                                <div className="email">
                                    <label className="form__label" for="email">Email </label>
                                    <input  type="email" id="email" name="email" className="form__input" value={info.email} placeholder="Email"
                                    onChange={(e)=>{dispatch({type:'update', fld:'email', val:e.target.value})}}/>
                                    <div id="emailerr" className="form-text"></div>
                                </div>
                                <div className="contact">
                                    <label className="form__label" for="contact">Contact </label>
                                    <input  type="text" id="contact" name="contact" className="form__input" value={info.contact} placeholder="Contact"
                                    onChange={(e)=>{dispatch({type:'update', fld:'contact', val:e.target.value})}}/>
                                    <div id="contacterr" className="form-text"></div>
                                </div>
                                <div className="password">
                                    <label className="form__label" for="password">Password </label>
                                    <input className="form__input" type="password" name="password" id="password" value={info.password} placeholder="Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'password', val:e.target.value})}}/>
                                    <div id="passworderr" className="form-text"></div>
                                </div>
                                <div className="confirm-password">
                                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                                    <input className="form__input" type="password" name="confirmPassword" id="confirmPassword" value={info.confirmPassword} placeholder="Confirm Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'confirmPassword', val:e.target.value})}}/>
                                    <div id="confirmPassworderr" className="form-text"></div>
                                </div>
                                <div className="area">
                                    <label className="form__label" for="area">Area </label>
                                    <input className="form__input" type="text" name="area" id="area" value={info.area} placeholder="Area"
                                    onChange={(e)=>{dispatch({type:'update', fld:'area', val:e.target.value})}}/>
                                    <div id="areaerr" className="form-text"></div>
                                </div>
                                <div className="city">
                                    <label className="form__label" for="city">City </label>
                                    <input className="form__input" type="text" name="city" id="city" value={info.city} placeholder="City" 
                                    onChange={(e)=>{dispatch({type:'update', fld:'city', val:e.target.value})}}/>
                                    <div id="cityerr" className="form-text"></div>
                                </div>
                                <div className="pincode">
                                    <label className="form__label" for="pincode">Pincode </label>
                                    <input className="form__input" type="text" name="pincode" id="pincode" value={info.pincode} placeholder="Pincode"
                                    onChange={(e)=>{dispatch({type:'update', fld:'pincode', val:e.target.value})}}/>
                                    <div id="pincodeerr" className="form-text"></div>
                                </div>
                                <div className="pan_no">
                                    <label className="form__label" for="pan_no">Pan number </label>
                                    <input className="form__input" type="text" name="pan_no" id="pan_no" value={info.pan_no} placeholder="Pan number"
                                    onChange={(e)=>{dispatch({type:'update', fld:'pan_no', val:e.target.value})}}/>
                                    <div id="pan_noerr" className="form-text"></div>
                                </div>
                                <div className="aadhar_no">
                                    <label className="form__label" for="aadhar_no">Aadhar number </label>
                                    <input className="form__input" type="text" name="aadhar_no" id="aadhar_no" value={info.aadhar_no} placeholder="Aadhar number"
                                    onChange={(e)=>{dispatch({type:'update', fld:'aadhar_no', val:e.target.value})}}/>
                                    <div id="aadhar_noerr" className="form-text"></div>
                                </div>
                            </div>
                        </form>
                        <div class="footer">
                            <button type="button" className="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-primary" onClick={(e)=>{ sendData(e)}} >Register</button>
                        </div>
                        <div>{msg}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    )       
}


export {InsertUser};