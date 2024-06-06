import React from 'react'
import { Link } from 'react-router-dom'
import './TeacherPage.css'
const Header = () => {
  return (
    <header className='header2'>
        <div className="container2 container">
          <a href="/teacher">
            <img src="https://static.tildacdn.one/tild3565-3339-4531-b230-366336306533/photo.png" alt="" width={"90px"} height={45}/>
          </a>
           <div className="nav">
           <Link to={'/teacher'}>
              <h3>Home </h3>
            </Link>
            <Link to={'/mygroups'}>
              <h3 >My Group </h3>
            </Link>
            <Link to={'/bookedlessons'}>
              <h3>My lesson</h3>
            </Link>
            <Link to={'/'} onClick={()=> localStorage.removeItem("phone")}>
              <h3>Log out</h3>
            </Link>
           </div>
        </div>

    </header>
  )
}

export default Header