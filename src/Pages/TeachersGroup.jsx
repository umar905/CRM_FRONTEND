import React, { useEffect, useState } from 'react'
import Header from '../Components/HeaderofTeacher/Header'
import axios from 'axios';

const TeachersGroup = () => {
    const [students, setStudents] = useState([]);
    const [data, setData] = useState([]);
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

    const currentAdmin = data?.find((el) => el.phone == phone);

    console.log(currentAdmin);
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
      const filteredStudents = students.filter(student => student.groupTeacher === currentAdmin?.name);

      useEffect(() => {
        getFunc()
        getStudents()
      }, []);
  return (
    <>
        <Header/>
    <div className="container2">
    <div className="teacher-table-container">
            <table className="teacher-table">
              <table>
                <h1>My Group:</h1>
                <br />
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  {/* <th>Delete</th> */}
                </tr>

                {filteredStudents.map((el) => {
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.phone}</td>
                     
                    </tr>
                  )
                })}
              </table>
            </table>
          </div>
    </div>
    </>
  )
}

export default TeachersGroup