import React from "react";
const LogOut = () => {
    
  // localStorage.removeItem("ourtoken");
  sessionStorage.removeItem('token');

  return (
    <div>
      <h2>Thank you for visiting. See you again!</h2>
    </div>
  );
};

export default LogOut;
