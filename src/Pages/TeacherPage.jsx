import React, { useEffect, useState } from 'react'

import Header from '../Components/HeaderofTeacher/Header'
import axios from 'axios';
import './TeacherPage.css'
const TeacherPage = () => {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
    const phone = localStorage.getItem('phone')
  
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

    const currentTeacher = data?.find((el) => el.phone == phone);

    const getStudents = async () => {
      await axios
        .get(`https://crm-backend-9t9e.onrender.com/students/`)
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };
    const filteredStudents = students.filter(student => student.groupTeacher === currentTeacher?.name);
    useEffect(() => {
      getFunc()
      getStudents()
    }, []);
  return (
    <>
        <Header/>
       <div className="pageMain">
       <div className="container2">

<div className="main">
<div className="infoSingle">
<img src={currentTeacher?.photo} alt="" />
  <h1>Name: {currentTeacher?.name}</h1>
  <h2>Phone: {currentTeacher?.phone}</h2>
  <h2>My Group: {currentTeacher?.groupName}</h2>
</div>


<div className="leftside">
  <ul>
    <li>
    <b>Students</b>
    <h2>{filteredStudents.length}</h2>
    </li>
    <li>
    <b>Groups</b>
    <h2>1</h2>
    </li>
    <li>
    <b>Password</b>
    <h2>{currentTeacher?.password}</h2>
    </li>
  </ul>
</div>
</div>
</div>
       </div>
    </>
  )
}

export default TeacherPage