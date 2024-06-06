import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Ruslanaka from "../images/ruslanaka.png";
import "./Profiles.css";
import { Link } from "react-router-dom";
const Profiles = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="info_login">
            <h1>Log In</h1>
            <h3>Choose the profile</h3>
          </div>
          
          <ul className="logins">
            <Link to={'/adminlogin'} className="li">
              <h2>Admin</h2>
              <img src={Ruslanaka} alt="" className="ruslanaka"/>
            </Link>
            <Link to={'/teacherlogin'} className="li">
              <h2>Teacher</h2>
              <img src={'https://cambridgeonline.uz/_nuxt/img/teacher.3ed74c5.png'} alt="" />
            </Link>
            
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profiles;
