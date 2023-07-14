import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";


const Login =() => {
  
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleError = (error) => {
    setErrorMessage(error);
  };


  const handleInput = (event) => {

    // const {name,value} =event.target;
    // setValues({...values,[name]:value})

    setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   await axios
      .post("https://mern-auth-backend-api-sq2e.onrender.com/login", values,{Headers: {
        "Content-Type": "application/json",
        
    }})
      .then((res) => {
        
        if (res.data.message ==="Success") {
          // console.log(res.data.token);
         localStorage.setItem("ourtoken",res.data.token);
          navigate("/");
          
        } 
        else if(res.data.message ==="Unsuccess"){

          handleError("Wrong User Name and Password Combination");
        }
        else if(res.data==="Error"){

          handleError("Server Errors");
        }
        else if(res.data.message==="Invalid Credentials"){

          handleError("Invalid Credentials");
        }
         
        else {
          handleError("Other Errors");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded">
          <h2>Login:</h2>
          <form action="" method="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email" placeholder="Enter Email"
                onChange={handleInput}
                name="email"
                className="form-control rounded-0 "
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={handleInput}
                name="password"
                className="form-control rounded-0 "
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Login</strong>
            </button>
            <div className="alert alert-warning mb-3" > {errorMessage}</div>
            <p>You agree to Terms and Conditions</p>
            <Link
              to="/signup"
              className="btn btn-default border rounded-0 bg-light w-100 text-decoration-none"
            >
              <strong>Create Account</strong>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
