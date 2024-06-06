import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const StudentControl = () => {
    const [teacher, setTeacher] = useState([]);
    const [student, setStudent] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [groupTeacher, setGroupTeacher] = useState("");
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


  const deleteStudent = (id) => {
    axios
      .delete(`https://crm-backend-9t9e.onrender.com/students/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };


    const handleOpen = (student) => {
    setOpen(true);
    setModalData(student);
    setName(student.name);
    setAge(student.age);
    setPhone(student.phone);
    setPassword(student.password);
    setGroupTeacher(student.groupTeacher);
    console.log(modalData._id);
   
  };


    const UpdateStudents = async (e) => {
    e.preventDefault();
    await axios
      .patch(`https://crm-backend-9t9e.onrender.com/students/${modalData._id}`, {
        name,
        age,
        phone,
        password,
        groupTeacher,
      })
      .then(() => {
        alert("Student updated successfully");
        handleClose();
        getStudents();
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    getTeachers();
    getStudents();
  }, []);
  return (
    <>
     <div className="teacher-table-container gggg">
            <table className="fefef">
              <thead>
              <h1>Students:</h1>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Teacher</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {student.map((el) => (
                  <tr key={el._id}>
                   
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>+{el.phone}</td>
                    <td>{el.groupTeacher}</td>
                    <td>{el.password}</td>
                    <td>
                      <div className="controlBtns">
                        <button
                          className="btndelete del"
                          onClick={() => deleteStudent(el._id)}
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
                <Modal
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
      </Modal>
          </div>
    </>
  )
}

export default StudentControl