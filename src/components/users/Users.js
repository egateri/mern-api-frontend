import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Login from "../login/Login";
import useToken from "../../useToken";

const Users = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

 
  const { token, setToken } = useToken();

  console.log("Initial Token: " +token);
  if(!token){
   
    return <Login setToken = {setToken}/>;
  }

  const handleResult = (result) => {
    setResults(result);
  };

  const handleMessage = (message) => {
    setMessage(message);
  };


  const getResults = () => {
    axios
      .post(process.env.REACT_APP_API+"/users")
      .then((res) => {
        if (res.data === "Error") {
          handleMessage("Errors connecting with database");
        } else if (res.data === "No Users") {
          handleMessage("No Users");
        } else {
          // console.log(res.data);
          handleResult(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    
      <button onClick={getResults}>Results:</button>
      <h1>{message}</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              return (
                <tr>
                  <Result
                    id={result.id}
                    name={result.name}
                    email={result.email}
                    password={result.password}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default Users;
