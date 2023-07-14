import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const[name,setName] =useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("ourtoken");

 
 
  const confirmLoggedIn = async()=>{

    try {
     const res = await axios.post( "https://mern-auth-backend-api-sq2e.onrender.com",{ token },{ Headers: {"Content-Type": "application/json", },});
    //  return response;
     console.log(res.data.message);

     if(res.data.message ==="Success"){
      setName(res.data.name);
      navigate("/")

    }
    else{

      navigate("/login");
    }

    } catch (error) {

     console.error(error);
     navigate("/login"); 
    }
  };
    
  useEffect(()=>{
    confirmLoggedIn();
  },[]);

  return (
    <div>
      <h2>Welcome Home : {name}</h2>
    </div>
  );

};
export default Home;
