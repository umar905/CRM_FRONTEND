import React from 'react'
import Header from './../Components/Header/Header';
import { Link } from 'react-router-dom';
import Studentimg from '../images/imgstudent.png'
const Studentlogin = () => {
  return (
    <>
        <Header/>
       
        <div className="teacherliginpage">
            <div className="container">
                <div className="lefsideteach">
                    <img src={Studentimg} alt="" />
                    
                </div>
                <div className="rightsideteach">
                    <h2>Welcome to IT Academy.</h2>
                    <Link to={'/'}>{`< `}Back to login page</Link>
                    <p>Please log in to your account</p>
                    <form className='teacherlogin'>
                        <input type="text" placeholder='Name...' />
                        <input type="password" placeholder='Password...' />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
            </div>
    </>
  )
}

export default Studentlogin