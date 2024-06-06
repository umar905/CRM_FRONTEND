import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <Link to={'/'} className='Logo'>
                <img src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/dmrs1c2n.ctw.jpg" alt="" width={'40px'} height={'40px'}/>
               <h4> IT ACADEMY - CRM</h4>
            </Link>
            
        </div>
    </header>
    </>
  )
}

export default Header