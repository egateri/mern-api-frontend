import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const[name,setName] =useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

 
 
 
   
   axios.post(process.env.REACT_APP_API+"/authwithcookie",{ withCredentials:true})

   .then((res)=>{
    console.log(res.data.message);

     if(res.data.message ==="Success"){
      // setName(res.data.name);
     

      return (
        <div>
          <h2>Welcome Home : {user?.first_name}</h2>
        </div>
      );
    

    }
    else{

      navigate("/login")
    }

   })
   .catch((error)=>{
    console.error(error);
    navigate("/"); 
   });
    //  return response;
     

   
  
    
  
 
};
export default Home;
