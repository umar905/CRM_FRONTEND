import React, { useEffect } from 'react'
import axios from 'axios';
import  { useState } from 'react'
import Header from '../Components/Header/Header';
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate';
import './controllerTeacher.css'
import { useNavigate } from 'react-router-dom';
const ControllerStudents = () => {
    const [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState("");
    const [teaches, setTeaches] = useState("");
    const creatStudent = (e) => {
        e.preventDefault();
        axios
          .post("https://crm-backend-9t9e.onrender.com/students", {
            photo: e.target[0].value,
            name: e.target[1].value,
            age: e.target[2].value,
            phone: e.target[3].value,
            password: e.target[4].value,
            groupTeacher: e.target[5].value,
          })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      };
    
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
        if (token !== '777777777') {
          navigate('/adminlogin');
        }
    
        getTeachers();
      }, []);
  return (
    <>
        <div className="controlAdminPage ">
      <div className="container">
        <AdminPageNavigate/>
      <div className="creates ">
               <div className="formSection">
              <h1>Add Student</h1>
              <form onSubmit={creatStudent} className="AddTeacherForm">
                <input
                  type="text"
                  placeholder="Photo"
                  required
                  // value={
                  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
                  // }
                  onChange={(e) => setImg(e.target.value)}
                  defaultValue={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"}
                />
                <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Age" required onChange={(e) => setAge(e.target.value)} />
                <input type="number" placeholder="Phone" required onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <select name="" id="" required>
                  {teacher.map((el) => {
                    return (
                      <option value={el.name}>{el.name}/{el.groupName}</option>
                    )
                  })}
                </select>
                <button type="submit">Submit</button>
              </form>


            </div>
            <div className="infoTeacher tec">
              <img src={img} alt="" width={'200px'} height={'200px'} />
              <p>Name: {name.slice(0, 30)}</p>
              <p>Age: {age}</p>
              <p>Phone Number: {phone}</p>
              <p>Password: {password}</p>
              <p>Teaches: {teaches}</p>

            </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default ControllerStudents