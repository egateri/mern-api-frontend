import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Users = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleResult = (result) => {
    setResults(result);
  };

  const handleMessage = (message) => {
    setMessage(message);
  };


  const token = localStorage.getItem("ourtoken");

  useEffect(()=>{
    confirmLoggedIn();
  },[]);


  const confirmLoggedIn = async()=>{

    try {
     const res = await axios.post(  "http://localhost:5500",{ token },{ Headers: {"Content-Type": "application/json", },});
    //  return response;
     console.log(res.data.message);

     if(res.data.message ==="Success"){
      navigate("/users")

    }
    else{

      navigate("/login");
    }

    } catch (error) {
     console.error(+error) 
    }
  };




  const getResults = () => {
    axios
      .post("http://localhost:5500/users")
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
