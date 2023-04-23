import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import SingleEdit from "./Pages/SingleEdit/SingleEdit";
import "./Style/dark.scss"
import { DarkModeContext } from "./Context/DarkModeContext";
import { useContext } from "react";
import Profile from "./Pages/Profile/Profile";
import CourseList from "./Pages/List/CourseList";
import InquiryList from "./Pages/List/InquiryList";
import TrainerList from "./Pages/List/TrainerList";
import StudentList from "./Pages/List/StudentList";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/students">
              <Route index  element={<StudentList />}></Route>
              <Route path=":studentId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/trainers">
              <Route index  element={<TrainerList/>}></Route>
              <Route path=":trainerId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/courses">
              <Route index  element={<CourseList/>}></Route>
              <Route path=":courseId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/inquiries">
              <Route index  element={<InquiryList/>}></Route>
              <Route path=":inquiryId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
