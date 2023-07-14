import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Reviews = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("ourtoken");

  

  const confirmLoggedIn = async()=>{

    try {
     const res = await axios.post(  "http://localhost:5500",{ token },{ Headers: {"Content-Type": "application/json", },});
    //  return response;
     console.log(res.data.message);

     if(res.data.message ==="Success"){
      navigate("/reviews")

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
      <h2>My Reviews to updated!</h2>
    </div>
  );
};

export default Reviews;