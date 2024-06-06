import React, { useEffect, useState } from "react";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import axios from "axios";
const Admin = () => {
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const getFunc = async () => {
    await axios
      .get("https://crm-backend-9t9e.onrender.com/admins")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFunc();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const currentAdmin = data?.find((el) => el.phone == phone);

    if (phone == currentAdmin?.phone && pass == currentAdmin?.password) {
      navigate("/admin");
      localStorage.setItem('phone', phone);
    } else {
      alert("404");
    }
  }

  return (
    <>
    {!localStorage.getItem('phone')?(
      <div className="cl">
      <div className="admin">
        <div className="admin_info">
          <h1>Admin Login</h1>
          <p>Please enter your login and password</p>
          <Link to={"/"}>
            <p> {"<"} Back</p>
          </Link>
        </div>
        <form className="adminform" onSubmit={handleSubmit}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone Number"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    ):navigate('/admin')&& window.location.reload() }
    </>
  );
};

export default Admin;
