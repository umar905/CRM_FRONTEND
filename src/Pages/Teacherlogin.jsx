import React, { useEffect, useState } from 'react'
import './teacherlogin.css'
import Header from '../Components/Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Teacherlogin = () => {
    const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const getFunc = async () => {
    await axios
      .get("https://crm-backend-9t9e.onrender.com/teachers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  function handleSubmit(e) {
      e.preventDefault();
      
      const currentAdmin = data?.find((el) => el.phone == phone);
      
      if (phone == currentAdmin?.phone && pass == currentAdmin?.password) {
          navigate("/teacher");
          localStorage.setItem('phone', phone);
        } else {
            alert("404");
        }
    }
    
    
    useEffect(() => {
        getFunc();
      }, []);
    return (

        <>
        <div className="flexdiv">
        <Header/>
            <div className="teacherliginpage">
            <div className="container">
                <div className="lefsideteach">
                    <img src="https://teacher.cambridgeonline.uz/assets/login-men.33547532.png" alt="" />
                    
                </div>
                <div className="rightsideteach">
                    <h2>Welcome to IT Academy.</h2>
                    <Link to={'/'}>{`< `}Back to login page</Link>
                    <p>Please log in to your account</p>
                    <form className='teacherlogin' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name...' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                        <input type="password" placeholder='Password...' value={pass} onChange={(e) => setPass(e.target.value)}/>
                        <button type='submit'>Log In</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Teacherlogin
