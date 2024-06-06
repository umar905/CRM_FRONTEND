import React, { useEffect, useState } from 'react';
import './adminpage.css';
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate';
import Header from '../Components/Header/Header';
import { MdGroups } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ControlStudents from '../Components/StudentControl/StudentControl'
import axios from 'axios';

const Adminpage = () => {
  const token = localStorage.getItem('phone');
  const navigate = useNavigate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [student, setStudent] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [modalData, setModalData] = useState({});
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [groupTeacher, setGroupTeacher] = useState("");
  // const handleClose = () => setOpen(false);
  
  const [teacher, setTeacher] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [groupName, setGroupName] = useState("");

 
  const handleClose = () => setOpen(false);


  

  const getTeachers = async () => {
    await axios
      .get('https://crm-backend-9t9e.onrender.com/teachers')
      .then((res) => {
        console.log(res.data); // Добавьте эту строку
        setTeacher(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getStudents = async () => {
    await axios 
      .get('https://crm-backend-9t9e.onrender.com/students')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };


  // const deleteStudent = (id) => {
  //   axios
  //     .delete(`http://localhost:1234/students/${id}`)
  //     .then(() => {
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  const deleteTeacher = (id) => {
    axios
      .delete(`https://crm-backend-9t9e.onrender.com/teachers/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const handleOpen = (student) => {
  //   setOpen(true);
  //   setModalData(student);
  //   setName(student.name);
  //   setAge(student.age);
  //   setPhone(student.phone);
  //   setPassword(student.password);
  //   setGroupTeacher(student.groupTeacher);
  //   console.log(modalData._id);
   
  // };

  const handleOpen = (teacher) => {
    setOpen(true);
    setModalData(teacher);
    setName(teacher.name);
    setAge(teacher.age);
    setPhone(teacher.phone);
    setPassword(teacher.password);
    setGroupName(teacher.groupName);
    console.log(modalData._id);
  };  
  
  // const UpdateStudents = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .patch(`http://localhost:1234/students/${modalData._id}`, {
  //       name,
  //       age,
  //       phone,
  //       password,
  //       groupTeacher,
  //     })
  //     .then(() => {
  //       alert("Student updated successfully");
  //       handleClose();
  //       getStudents();
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };
  const UpdateTeacher = async (e) => {
    e.preventDefault();
    await axios
      .patch(`https://crm-backend-9t9e.onrender.com/${modalData._id}`, {
        name,
        age,
        phone,
        password,
        groupName,
      })
      .then(() => {
        alert("Teacher updated successfully");
        handleClose();
        getTeachers();
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (token !== '777777777') {
      navigate('/adminlogin');
    }
    getStudents();
    getTeachers();
  }, []);

  return (
    <div className="AdminPage">
      <div className="container">
        <AdminPageNavigate />
        <div className="leftsideAdmin">
          <div className="infoCards1">
            <div className="cardsInfoAdmin">
              <GiTeacher className="icon_react" />
              <h3>Total Teachers</h3>
              <h2>{teacher.length}</h2>
            </div>
            <div className="cardsInfoAdmin">
              <PiStudent className="icon_react" />
              <h3> Total Students</h3>
              <h2>{student.length}</h2>
            </div>
            <div className="cardsInfoAdmin">
              <MdGroups className="icon_react" />
              <h3>Total Groups</h3>
              <h2>{teacher.length}</h2>
            </div>
          </div>
         
      <ControlStudents/>


          <div className="teacher-table-container gggg">
            <table className="fefef">
              <thead>
              <h1>Teachers:</h1>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Group</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teacher.map((el) => (
                  <tr key={el._id}>
             
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.phone}</td>
                    <td>{el.groupName}</td>
                    <td>{el.password}</td>
                    <td>
                      <div className="controlBtns">
                        <button
                          className="btndelete del"
                          onClick={() => deleteTeacher(el._id)}
                        >
                          <FaRegTrashCan className="trash" />
                        </button>
                        <button
                          className="btndelete del edit"
                          onClick={() => handleOpen(el)}
                        >
                          <MdEdit className="trash edit1" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="btndelete del" onClick={handleClose}>X</button>
          <h2 className="del">Edit</h2>
          <form className="AddTeacherForm" onSubmit={UpdateStudents}>
            <input
              type="text"
              placeholder="Photo"
              required
              value='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png'
              readOnly
            />
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              value={groupTeacher}
              onChange={(e) => setGroupTeacher(e.target.value)}
              required
            >
              {teacher.map((el) => (
                <option key={el._id} value={el.name}>
                  {el.name}/{el.groupName}
                </option>
              ))}
            </select>
            <button type='submit'>Update</button> 
          </form>
        </Box>
      </Modal> */}


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="btndelete del" onClick={handleClose}>X</button>
          <h2 className="del">Edit</h2>
          <form className="AddTeacherForm" onSubmit={UpdateTeacher}>
            <input
              type="text"
              placeholder="Photo"
              required
              value='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png'
              readOnly
            />
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            >
              {teacher.map((el) => (
                <option key={el._id} value={el.name}>
                  {el.name}/{el.groupName}
                </option>
              ))}
            </select>
            <button type='submit'>Update</button> 
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Adminpage;
