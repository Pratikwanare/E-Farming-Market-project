import React, {useReducer,useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
function InsertUser() {

    const init={
        type:{value:"",hasError:true,error:"",touched:false},
        fname:{value:"",hasError:true,error:"",touched:false},
        lname:{value:"",hasError:true,error:"",touched:false},
        bdate:{value:"",hasError:true,error:"",touched:false},
        email:{value:"",hasError:true,error:"",touched:false},
        contact:{value:"",hasError:true,error:"",touched:false},
        password:{value:"",hasError:true,error:"",touched:false},
        confirmPassword:{value:"",hasError:true,error:"",touched:false},
        area:{value:"",hasError:true,error:"",touched:false},
        city:{value:"",hasError:true,error:"",touched:false},
        pincode:{value:"",hasError:true,error:"",touched:false},
        pan_no:{value:"",hasError:true,error:"",touched:false},
        aadhar_no:{value:"",hasError:true,error:"",touched:false},
        isFormValid:false
    }

    const reducer=(state,action) =>{
        switch(action.type)
        {
            case 'update':
                // console.log(action.data);
          const {name,value,hasError,error,touched,isFormValid}=action.data;
          return {...state,[name]:{value,hasError,error,touched},isFormValid}
      case 'reset':
            return init;
            default :
                return 0;
        }
    }

    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");
    const navigate=useNavigate();

    const handleChange=(name,value)=>{
        let {hasError,error,isFormValid}=validateData(name,value);
        // let isFormValid=true;
        // console.log("hello",isFormValid)
        // for(const key in info)
        // {
        //     if(info[key].hasError===true)
        //     {
        //         isFormValid = false;
        //         break;
        //     }
        // }
    
        dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
      }


      const validateData=(name,value)=>{
        let hasError=false;
        let error="";
        let isFormValid=true;
        switch(name){

            case 'bdate':
                var cyear=new Date().getFullYear();
                var byear=new Date(value).getFullYear();
                if(cyear-byear<18)
                {
                    hasError = true;
                    error="You should be 18 year old";
                    isFormValid=false;
                    break;
                }

            case 'type':
                hasError = false;
                break;

            case 'pincode':
                var exp =/^\d{6}$/;
                if(!exp.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid pincode";
                }
                break;

            case 'area':
                if(value==="")
                {
                    hasError = true;
                    error = "Enter area";
                    isFormValid=false;
                }
                break;

            case 'city':
                if(value==="")
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter city";
                }
                break;
            
            case 'pan_no':
                var exp2 =/^[A-Z]{5}[0-9]{4}[A-Z]$/;
                if(!exp2.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid pan";
                }
                break;

            case 'aadhar_no':
                var exp3 =/^[0-9]{12}$/;
                if(!exp3.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid aadhar";
                }
                break;

            case 'fname':
                if(value==="")
                {
                    hasError = true;
                    error = "Enter first name";
                    isFormValid=false;   
                }
                break;

            case 'lname':
                if(value==="")
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter last name";
                }
                break;

            case 'password':
                var exp4 =/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*()]{8,}/;
                if(!exp4.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid Password";
                }
                break;

            case 'confirmPassword':
                if(value!==info.password.value)
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Password should be matched";
                }
                break;

            case 'email':
                var exp1 =/^[\w.]{3,}@[a-z]{2,}.[a-z]{2,}$/;
                if(!exp1.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid email ID";
                }
                break;

            case 'contact':
                var exp5 =/^[0-9]{10}$/;
                if(!exp5.test(value))
                {
                    hasError = true;
                    isFormValid=false;
                    error = "Enter valid email ID";
                }
                break;

            default :
                return 0;
                
        }
        return {hasError,error,isFormValid}
      }


    const sendData=()=>{
        // e.preventDefault();
        const reqOpitions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                pincode: info.pincode.value,
                area: info.area.value,
                city: info.city.value,
                pan_no: info.pan_no.value,
                aadhar_no: info.aadhar_no.value,
                bdate: info.bdate.value,
                user: {
                    fname: info.fname.value,
                    lname: info.lname.value,
                    password: info.password.value,
                    email: info.email.value,
                    contact: info.contact.value,
                    type:info.type.value
                }
            })
        }
        if(info.type.value==='f')
        {
            fetch("http://localhost:8080/registerfarmer",reqOpitions)
            .then(resp => {
                // alert("in farmer");
                if(resp.ok)
                {
                    // alert("Registered successfully");
                    navigate("/login");
                }
                else{
                    // alert("farmer error");
                    setMsg("This email id is already registered.");
                }
            }) 
        }
        else if(info.type.value==='w')
        {
            // alert("registering");
            fetch("http://localhost:8080/registerwholesaler",reqOpitions)
            .then(resp => {
                // alert("in wholesaler");
                if(resp.ok)
                {
                    // alert("Registered successfully");
                    navigate("/login");
                }
                else{
                    // alert("farmer error");
                    setMsg("This email id is already registered.");
                }
            }) 
            
        }
        else
            setMsg("Please fill all the fields");
    }


    return(
    <div>
        <nav className="navbar navbar-expand-md bg-light">
          <div className="container ">
              <ul className="navbar-nav" >
                  <li className="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/login" class="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/register" class="nav-link">Register</Link>
                  </li>
              </ul>
          </div>
        </nav>
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
                                        onClick={(e)=>{handleChange("type",e.target.value)}}
                                        />Farmer&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="form__input" name="type" type="radio" id="type" value="w"
                                        //onClick={(e)=>{info.type.value=e.target.value}}
                                        onClick={(e)=>{handleChange("type",e.target.value)}}
                                        />Wholesaler
                                        <div id="typeerr" className="form-text"></div>
                                    </div>
                                    <div className="firstname">
                                        <label className="form__label" for="fname">First Name </label>
                                        <input className="form__input" name="fname" type="text" id="fname" value={info.fname.value} placeholder="First Name"
                                        onChange={(e)=>{handleChange("fname",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.fname.touched && info.fname.hasError?"block":"none" }}>
                                            {info.fname.error}
                                        </div>
                                    </div>
                                    <div className="lastname">
                                        <label className="form__label" for="lname">Last Name </label>
                                        <input  type="text" name="lname" id="lname"  className="form__input" value={info.lname.value} placeholder="Last Name"
                                        onChange={(e)=>{handleChange("lname",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.lname.touched && info.lname.hasError?"block":"none" }}>
                                            {info.lname.error}
                                        </div>
                                    </div>
                                    <div className="bdate">
                                        <label className="form__label" for="bdate">Birth Date </label>
                                        <input type="date" id="bdate" name="bdate" className="form__input" value={info.bdate.value} placeholder="Birth Date"
                                        onChange={(e)=>{handleChange("bdate",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.bdate.touched && info.bdate.hasError?"block":"none" }}>
                                            {info.bdate.error}
                                        </div>
                                    </div>
                                    <div className="email">
                                        <label className="form__label" for="email">Email </label>
                                        <input  type="email" id="email" name="email" className="form__input" value={info.email.value} placeholder="Email"
                                        onChange={(e)=>{handleChange("email",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.email.touched && info.email.hasError?"block":"none" }}>
                                            {info.email.error}
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <label className="form__label" for="contact">Contact </label>
                                        <input  type="text" id="contact" name="contact" className="form__input" value={info.contact.value} placeholder="Contact"
                                        onChange={(e)=>{handleChange("contact",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.contact.touched && info.contact.hasError?"block":"none" }}>
                                            {info.contact.error}
                                        </div>
                                    </div>
                                    <div className="password">
                                        <label className="form__label" for="password">Password </label>
                                        <input className="form__input" type="password" name="password" id="password" value={info.password.value} placeholder="Password"
                                        onChange={(e)=>{handleChange("password",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.password.touched && info.password.hasError?"block":"none" }}>
                                            {info.password.error}
                                        </div>
                                    </div>
                                    <div className="confirm-password">
                                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                                        <input className="form__input" type="password" name="confirmPassword" id="confirmPassword" value={info.confirmPassword.value} placeholder="Confirm Password"
                                        onChange={(e)=>{handleChange("confirmPassword",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.confirmPassword.touched && info.confirmPassword.hasError?"block":"none" }}>
                                            {info.confirmPassword.error}
                                        </div>
                                    </div>
                                    <div className="area">
                                        <label className="form__label" for="area">Area </label>
                                        <input className="form__input" type="text" name="area" id="area" value={info.area.value} placeholder="Area"
                                        onChange={(e)=>{handleChange("area",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.area.touched && info.area.hasError?"block":"none" }}>
                                            {info.area.error}
                                        </div>
                                    </div>
                                    <div className="city">
                                        <label className="form__label" for="city">City </label>
                                        <input className="form__input" type="text" name="city" id="city" value={info.city.value} placeholder="City" 
                                        onChange={(e)=>{handleChange("city",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.city.touched && info.city.hasError?"block":"none" }}>
                                            {info.city.error}
                                        </div>
                                    </div>
                                    <div className="pincode">
                                        <label className="form__label" for="pincode">Pincode </label>
                                        <input className="form__input" type="text" name="pincode" id="pincode" value={info.pincode.value} placeholder="Pincode"
                                        onChange={(e)=>{handleChange("pincode",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.pincode.touched && info.pincode.hasError?"block":"none" }}>
                                            {info.pincode.error}
                                        </div>
                                    </div>
                                    <div className="pan_no">
                                        <label className="form__label" for="pan_no">Pan number </label>
                                        <input className="form__input" type="text" name="pan_no" id="pan_no" value={info.pan_no.value} placeholder="Pan number"
                                        onChange={(e)=>{handleChange("pan_no",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.pan_no.touched && info.pan_no.hasError?"block":"none" }}>
                                            {info.pan_no.error}
                                        </div>
                                    </div>
                                    <div className="aadhar_no">
                                        <label className="form__label" for="aadhar_no">Aadhar number </label>
                                        <input className="form__input" type="text" name="aadhar_no" id="aadhar_no" value={info.aadhar_no.value} placeholder="Aadhar number"
                                        onChange={(e)=>{handleChange("aadhar_no",e.target.value)}}/>
                                        <br/>
                                        <div className='text-center' style={{color:"#dc3545", display: info.aadhar_no.touched && info.aadhar_no.hasError?"block":"none" }}>
                                            {info.aadhar_no.error}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="footer">
                                <button type="button" className="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-primary" onClick={sendData} disabled={!info.isFormValid}>Register</button>
                                {/* disabled={!info.isFormValid} */}
                            </div>
                            {/* <div>{JSON.stringify(info)}</div> */}
                            <div >{msg}</div>
                            {/* <div>{info.type.value}</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    )       
}


export {InsertUser};