import React from "react";
import Login from "../login/Login";
import useToken from "../../useToken";
const Reviews = () => {
  
  const { token, setToken } = useToken();

  console.log("Initial Token: " +token);
  if(!token){
   
    return <Login setToken = {setToken}/>;
  }

  return (
    <div>
      <h2>My Reviews to updated!</h2>
    </div>
  );
};

export default Reviews;