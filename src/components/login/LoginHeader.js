import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch(process.env.REACT_APP_API + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginHeader = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ email, password });
    console.log("Received Token " + token?.message);
    if (token?.message === "Success") {
      sessionStorage.setItem("token", JSON.stringify(token));

      navigate("/");
    } else {
      setErrorMessage(token?.message);
    }
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
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control rounded-0 "
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Login</strong>
            </button>
            <div className="alert alert-warning mb-3"> {errorMessage}</div>
            <p>You agree to Terms and Conditions</p>
            <a
              href="/signup"
              className="btn btn-default border rounded-0 bg-light w-100 text-decoration-none"
            >
              <strong>Create Account</strong>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
