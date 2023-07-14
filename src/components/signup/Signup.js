import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleError = (error) => {
    setErrorMessage(error);
  };
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev,[e.target.name]: e.target.value}));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5500/register", values)
      .then((res) => {
        if (res.data.message === "success") {
          // localStorage.setItem("ourtoken",res.data.user.token);
          navigate("/login");
        }
        else if (res.data === "Error") {
          handleError("Server Errors");
        }
        else if (res.data.message === "User Already exists. Please Login") {
          handleError("User Exists");
        }})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded">
          <h2>Sign Up:</h2>
          <form action="" method="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name">
                <strong>First Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                onChange={handleInput}
                name="first_name"
                className="form-control rounded-0 "
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name">
                <strong>Last Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                onChange={handleInput}
                name="last_name"
                className="form-control rounded-0 "
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
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
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Sign Up</strong>
            </button>
            <div className="alert alert-warning mb-3" > {errorMessage}</div>
            <p>You agree to Terms and Conditions</p>
            <Link
              to="/login"
              className="btn btn-default border rounded-0 bg-light w-100"
            >
              <strong>Login</strong>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
