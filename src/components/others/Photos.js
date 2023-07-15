import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Photos = () => {
    
  const navigate = useNavigate();

  const token = localStorage.getItem("ourtoken");

  

  const confirmLoggedIn = async()=>{

    try {
     const res = await axios.post(  "https://mern-auth-backend-api-sq2e.onrender.com/authwithtoken",{ token },{ Headers: {"Content-Type": "application/json", },});
    //  return response;
     console.log(res.data.message);

     if(res.data.message ==="Success"){
      navigate("/photos")

    }
    else{

      navigate("/login");
    }

    } catch (error) {
      navigate("/login");
     console.error(error) 
    }
  };
  useEffect(()=>{
    confirmLoggedIn();
  },[]);

  return (
    <div>
      <h2>My Photos to be updated!</h2>
    </div>
  );
};

export default Photos;