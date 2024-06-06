import React, { useEffect, useState } from 'react'
import Header from '../Components/HeaderofTeacher/Header'
import { getTeachers, getRooms, getBookings } from '../services/api';
import './myLessons.css'
const MyLessons = () => {

    const [teachers, setTeachers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const teachersData = await getTeachers();
          const roomsData = await getRooms();
          const bookingsData = await getBookings();
          setTeachers(teachersData.data);
          setRooms(roomsData.data);
          setBookings(bookingsData.data);
        };
      
        fetchData();
      }, []);
  return (
   <>
        <Header/>
        <div className="container">
        <div className='bbb'>
        <h3>Bookings</h3>
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              {booking.teacher.name} - {booking.room.roomNumber} - {new Date(booking.startTime).toLocaleString()} <b>to</b> {new Date(booking.endTime).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
   </div>
   </>
  )
}

export default MyLessons