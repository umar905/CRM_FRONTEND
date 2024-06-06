import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import AdminPageNavigate from './../Components/AdminPageNavigate/AdminPageNavigate';
import { useNavigate, useParams } from 'react-router-dom';
import './TeacherId.css'
import axios from 'axios';
import { FaRegTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import { IoMdArrowBack } from "react-icons/io";

const TeacherId = () => {
  const [teacher, setTeaacher] = useState({});
  const [students, setStudents] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate()





  const getTeacher = async () => {
    await axios
      .get(`https://crm-backend-9t9e.onrender.com/teachers/${id}`)
      .then((res) => {
        setTeaacher(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };



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

  const deleteTeacher = (id) => {
    axios
      .delete(`https://crm-backend-9t9e.onrender.com/teachers/${id}`)
      .then(() => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(`https://crm-backend-9t9e.onrender.com/students/${id}`)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        alert(err);
      });
  };


  const filteredStudents = students.filter(student => student.groupTeacher === teacher.name);


  console.log(filteredStudents);
  const token = localStorage.getItem('phone');
  useEffect(() => {
    if (token !== '777777777') {
      navigate('/adminlogin');
    }

    getTeacher();
    getStudents()
  }, []);
  return (
    <>
      <div className="teacherpageId">
        <div className="container">
          <AdminPageNavigate />

          <h3 onClick={() => navigate(-1)}>
            <IoMdArrowBack className={'trash backto'} />
          </h3>
          <div className="teacher-table-container">
            <table className="teacher-table">
              <table>
                <h1>Students:</h1>
                <br />
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Teacher</th>
                  <th>Password</th>
                  <th>Study</th>
                  {/* <th>Delete</th> */}
                </tr>

                {filteredStudents.map((el) => {
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.phone}</td>
                      <td>{el.groupTeacher}</td>
                      <td>{el.password}</td>
                      <td>{teacher?.groupName}</td>
                      <button className="btndelete del" onClick={() => deleteStudent(el?._id)}>
                        <FaRegTrashCan className='trash' />
                      </button>
                    </tr>
                  )
                })}
              </table>
            </table>
          </div>
          <div className="infoTeacher">
            <img src={teacher?.photo} alt="" />
            <h2>Name: {teacher?.name}</h2>
            <h3>Phone Number: {teacher?.phone}</h3>
            <h3>Teaches: {teacher?.groupName}</h3>
            <h3>Age: {teacher?.age}</h3>
            <h3>Password: {teacher?.password}</h3>
            <div className="btnsControl">
              <button className="btndelete" onClick={() => deleteTeacher(teacher?._id)}>
                <FaRegTrashCan className='trash' />
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherId