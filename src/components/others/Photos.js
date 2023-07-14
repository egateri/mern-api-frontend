import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Photos = () => {
    
  const navigate = useNavigate();

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
      navigate("/photos")

    }
    else{

      navigate("/login");
    }

    } catch (error) {
     console.error(+error) 
    }
  };
  return (
    <div>
      <h2>My Photos to be updated!</h2>
    </div>
  );
};

export default Photos;