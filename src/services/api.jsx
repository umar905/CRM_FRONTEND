import axios from 'axios';

const API_URL = 'https://crm-backend-9t9e.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getTeachers = () => api.get('/teachers');
export const getRooms = () => api.get('/rooms');
export const getBookings = () => api.get('/bookings');
export const createBooking = (bookingData) => api.post('/bookings', bookingData);

export default api;
