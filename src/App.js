
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LogOut from "./components/logout/LogOut";
import Reviews from "./components/others/Reviews";
import Photos from "./components/others/Photos";
import Blogs from "./components/others/Blogs";

const App = () => {

  return (
    
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
