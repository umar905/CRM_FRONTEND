import React, { useEffect, useState } from 'react'
import AdminPageNavigate from '../Components/AdminPageNavigate/AdminPageNavigate'
import { useNavigate } from 'react-router-dom';
import { getTeachers, getRooms, getBookings, createBooking } from '../services/api';
import './Booking.css'
const Booking = () => {

  const token = localStorage.getItem('phone');



  const [teachers, setTeachers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [teacherId, setTeacherId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');



  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      // Validate date and time
      const currentDate = new Date();
      const selectedDateTime = new Date(date + 'T' + startTime);
      if (selectedDateTime <= currentDate) {
        alert('Please select a future date and time for booking.');
        return;
      }

      await createBooking({ teacherId, roomId, date, startTime });
      alert('Booking created successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again later.');
    }
  };
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      const teachersData = await getTeachers();
      const roomsData = await getRooms();
      const bookingsData = await getBookings();
      setTeachers(teachersData.data);
      setRooms(roomsData.data);
      setBookings(bookingsData.data);
    };
    if (token !== '777777777') {
      navigate('/adminlogin');
    }
    fetchData();
  }, []);
  return (
    <div className='container'>
      <div className="soon" style={{ display: "flex", alignItems: 'center' }}>
        <AdminPageNavigate />
        <div className='soon2'>
          <div className='bookdiv'>
            <h3>Create Booking</h3>
            <form onSubmit={handleBooking}>
              <select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} required>
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    <img src={teacher.photo} alt="" width={40} height={40} />
                    {teacher.name}
                  </option>
                ))}
              </select>
              <select value={roomId} onChange={(e) => setRoomId(e.target.value)} required>
                <option value="">Select Room</option>
                {rooms.map((room) => (
                  <option key={room._id} value={room._id}>
                    {room.roomNumber}
                  </option>
                ))}
              </select>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required />
              <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
              <button type="submit">Book</button>
            </form>
          </div>

          <div>
            <h3>Bookings</h3>
            <ul>
              {bookings.map((booking) => (
                <li key={booking._id}>
                  {booking.teacher.name} - {booking.room.roomNumber} - <b> {new Date(booking.startTime).toLocaleString().slice(0, -3)} </b>
                  {/* to {new Date(booking.endTime).toLocaleString()} */}
                </li>
              ))}
            </ul>
          </div>





        </div>
      </div>
    </div>
  )
}

export default Booking