import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Blogs = () => {
    
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
      navigate("/blogs")

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
      <h2>My blogs to be updated!</h2>
    </div>
  );
};

export default Blogs;
