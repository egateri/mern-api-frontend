import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Blogs = () => {
    
  const navigate = useNavigate();

  const token = localStorage.getItem("ourtoken");

 


  const confirmLoggedIn = async()=>{

    try {
     const res = await axios.post(process.env.REACT_APP_API+"/authwithtoken",{ token },{ Headers: {"Content-Type": "application/json", },});
    //  return response;
     console.log(res.data.message);

     if(res.data.message ==="Success"){
      navigate("/blogs")

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
      <h2>My blogs to be updated!</h2>
    </div>
  );
};

export default Blogs;
