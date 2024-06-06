import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import AdminPageNavigate from "../Components/AdminPageNavigate/AdminPageNavigate";
import axios from "axios";
import "./controlAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
const ControlAdmin = () => {
  const [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [teaches, setTeaches] = useState("");
  const creatTeacher = (e) => {
    e.preventDefault();
    axios
      .post("https://crm-backend-9t9e.onrender.com/teachers", {
        photo: e.target[0].value,
        name: e.target[1].value,
        age: e.target[2].value,
        phone: e.target[3].value,
        password: e.target[4].value,
        groupName: e.target[5].value,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
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
      <div className="controlAdminPage">
       
        <div className="container">
          <AdminPageNavigate />
          <div className="creates">

          <ul className="logins">
            <Link to={'/controlTeacher'} className="li">
              <h2>Teacher</h2>
              <img src={'https://cambridgeonline.uz/_nuxt/img/teacher.3ed74c5.png'} alt="" />
            </Link>
            <Link className="li" to={'/controlStudent'}>
              <h2>Student</h2>
              <img src={'https://cambridgeonline.uz/_nuxt/img/student.823946f.png'} alt="" />
            </Link>
          </ul>
            {/* <div className="formSection">
              <h1>Add Teacher</h1>
              <form onSubmit={creatTeacher} className="AddTeacherForm">
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
                <input type="text" placeholder="Teaches" required onChange={(e) => setTeaches(e.target.value)} />
                <button type="submit">Submit</button>
              </form>


            </div> */}
            {/* <div className="infoTeacher tec">
              <img src={img} alt="" width={'200px'} height={'200px'} />
              <h2>Name: {name}</h2>
              <h3>Age: {age}</h3>
              <h3>Phone Number: {phone}</h3>
              <h3>Password: {password}</h3>
              <h3>Teaches: {teaches}</h3>
            </div> */}

           
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlAdmin;
