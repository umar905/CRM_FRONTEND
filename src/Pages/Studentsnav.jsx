import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Studentsnav = () => {

  const [student, setStudent] = useState([]);

  const getStudents = async () => {
    await axios
      .get("https://crm-backend-9t9e.onrender.com/students")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const token = localStorage.getItem('phone');
  const navigate = useNavigate()


  useEffect(() => {
    getStudents();
    if (token !== '777777777') {
      navigate('/adminlogin');
    }

  }, []);
  return (
    <>
     < >
    <div className="pageGroupAdmin">
    <br />
    <div className="container">
    <AdminPageNavigate/>
    <ul className='gradminul'>

      {student.map((el)=>{
        return(
          <li className='gradminullist'>
          <img src={el.photo} alt="" width={'100px'}/>
          <h2>{el.name}</h2>
          
        </li>
        )
      })}
  
    </ul>
    </div>
    </div>
    </>
    </>
  )
}

export default Studentsnav