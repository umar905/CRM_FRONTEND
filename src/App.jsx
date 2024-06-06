import { Route, Routes } from "react-router-dom";
import Profiles from "./Pages/Profiles";
import Admin from "./Pages/Admin";
import Teacherlogin from "./Pages/Teacherlogin";
import Studentlogin from "./Pages/Studentlogin";
import AdminPage from "./Pages/Adminpage";
import Groupspage from './Pages/Groupspage';
import TeachersNav from "./Pages/TeachersNav";
import Studentsnav from "./Pages/Studentsnav";
import TeacherId from "./Pages/TeacherId";
import ControlAdmin from './Pages/ControlAdmin'
import ControlTeacher from './Pages/ControlTeacher'
import ControllerStudents from "./Pages/ControllerStudents";
import Booking from "./Pages/Booking";
import TeacherPage from "./Pages/TeacherPage";
import TeachersGroup from "./Pages/TeachersGroup";
import MyLessons from "./Pages/MyLessons";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/teacherlogin" element={<Teacherlogin />} />
        <Route path="/studentlogin" element={<Studentlogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/groupadmin" element={<Groupspage/>}/>
        <Route path="/teacheradmin" element={<TeachersNav/>}/>
        <Route path="/studentadmin" element={<Studentsnav/>}/>
        <Route path='/:id' element={<TeacherId/>} />
        <Route path='/controlAdmin' element={<ControlAdmin/>} />
        <Route path="/controlTeacher" element={<ControlTeacher/>}/>
        <Route path="/controlStudent" element={<ControllerStudents/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/teacher" element={<TeacherPage/>}/>
        <Route path="/mygroups" element={<TeachersGroup/>}/>
        <Route path="/bookedlessons" element={<MyLessons/>}/>
      </Routes>
    </>
  );
}

export default App;
