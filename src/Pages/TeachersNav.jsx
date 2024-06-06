import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeachersNav = () => {
  const [teacher, setTeacher] = useState([]);

  const getTeachers = async () => {
    await axios
      .get("https://crm-backend-9t9e.onrender.com/teachers")
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <>
     < >
    <div className="pageGroupAdmin">
    <div className="container">
    <AdminPageNavigate/>
    <ul className='gradminul'>

      {teacher.map((el)=>{
        return(
          <Link  to={`/${el._id}`} className='gradminullist'>
        <img src={el.photo} alt="" width={'100px'}/>
        <h2>{el.name}</h2>

      </Link>
        )
      })}
  
    </ul>
    </div>
    </div>
    </>
    </>
  )
}


export default TeachersNav