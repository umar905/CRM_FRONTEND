import React from 'react'
import "./AdminPageNavigate.css"
import { Link } from 'react-router-dom'
import { MdGroups } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";

import { MdManageAccounts } from "react-icons/md";

const AdminPageNavigate = () => {
  return (
    <div>
      <nav>
        <div className="infoNav">
          <img src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/dmrs1c2n.ctw.jpg" alt="" width={"100px"} height={"100px"} />

        </div>
      <br />
      <br />
        <ul className="category_list">
          <Link to={'/admin'} className="category_items">
          <IoMdHome className="icon_react"/>

            <h2>Dashboard</h2>
          </Link >
          <Link to={'/groupadmin'}  className="category_items">
            <MdGroups className='icon_react' />
            <h2>Groups</h2>
          </Link >
          <Link to={'/teacheradmin'} >
            <GiTeacher className='icon_react' />

            <h2>Teachers</h2>
          </Link >
          <Link to={'/controlAdmin'}>
            <MdManageAccounts className='icon_react' />
            <h2>Control</h2>
          </Link >
          <Link to={'/booking'}>
          <FaBookmark />
            <h2>Booking</h2>
          </Link >
          <Link to={'/'} onClick={()=>localStorage.removeItem('phone')} >
            <MdOutlineLogout className='icon_react' />
            <h2>Log out</h2>
          </Link >

        </ul>

      </nav>
    </div>
  )
}

export default AdminPageNavigate
