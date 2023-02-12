import { Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./pages/content/Courses";
import Details from "./pages/material-dateil/Details";
import Late from "./pages/material-dateil/Late";
import Submitted from "./pages/material-dateil/Submitted";
import Waiting from "./pages/material-dateil/Waiting";
import Materials from "./pages/content/Materials";
import SideVar from "./pages/SideVar";
import Students from "./pages/content/Students";
import StudentsDetail from "./pages/student-detail/StudentDetails";
import Rating from "./pages/content/Rating";
import AnounCements from "./pages/side_vars/AnounCements";
import Notification from "./pages/side_vars/Notification";
import Schedule from "./pages/side_vars/Schedule";

function App() {
  return (
    <div className="App">
      <SideVar />
      <Routes>
        <Route path="/courses" element={<Courses />}>
          <Route path="materials" element={<Materials />} />
          <Route path="materials/:materialsId/detail" element={<Details />}>
            <Route path="submitted" element={<Submitted />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route path="students" element={<Students />} />
          <Route
            path="students/:studentId/detail"
            element={<StudentsDetail />}
          />
          <Route path="rating" element={<Rating />} />
        </Route>
        <Route path="/anouncements" element={<AnounCements />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;
