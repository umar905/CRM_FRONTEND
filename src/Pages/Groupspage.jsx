import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate'
import './Groupspageadmin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Groupspage = () => {
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

  const token = localStorage.getItem('phone');
  const navigate = useNavigate()
  useEffect(() => {
    getTeachers();
      if (token !== '777777777') {
        navigate('/adminlogin');
      }
  }, []);
  return (
    < >
    <div className="pageGroupAdmin">
  
    <div className="container">
    <AdminPageNavigate/>
   
    <table>
            <h1>Groups:</h1>
            <br />
                <tr>
                  <th>Teacher</th>
                  <th>Course</th>
                </tr>
             
             {teacher.map((el)=>{
              return(
                <tr>
                <td>{el.name}</td>
                <td>{el.groupName}</td>
              </tr>
              )
             })}
              </table>
    </div>
    </div>
    </>
  )
}

export default Groupspage