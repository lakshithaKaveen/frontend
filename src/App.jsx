import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRouteUser from "./components/PrivateRouteUser";
import PrivateRouteTutor from "./components/PrivateRouteTutor";

import Homepage from "./HomePage_Files/Homepage";
import About from "./HomePage_Files/About";
import Services from "./HomePage_Files/Services";
import HomeContact from "./HomePage_Files/HomeContact";

import UserDashboard from "./User_Files/UserDashboard";
import UserAllCourses from "./User_Files/UserAllCourses";
import UserProfile from "./User_Files/UserProfile";
import UserContact from "./User_Files/UserContact";

import Tutor from "./Tutor_Files/Tutor";
import TutorPublish from "./Tutor_Files/TutorPublish";
import TutorContact from "./Tutor_Files/TutorContact";

import LoginForm from "./Login_Files/LoginForm";
import RegisterForm from "./Login_Files/RegisterForm";
import TutorRegister from "./Login_Files/TutorRegister";
import LoginTutor from "./Login_Files/LoginTutor";

import MachineLearning from "./Course_Files/machineLearning";
import PythonProgramming from "./Course_Files/pythonProgramming";

function App() {

  //User Log Status
  const [userLogged, setUserLogStatus] = useState(false);

  const isUserLog = (data) => {
    setUserLogStatus(data);
  };

  //Tutor Log status
  const [tutorLogged, setTutorLogStatus] = useState(false);

  const isTutorLog = (data) => {
    setTutorLogStatus(data);
  };


  return (
    <Routes>
      {/* HomePage */}
      <Route path="/frontend/" element={<Homepage />} />
      <Route path="/frontend/about" element={<About />} />
      <Route path="/frontend/services" element={<Services />} />
      <Route path="/frontend/contact" element={<HomeContact />} />
   
      {/* User */} 
      <Route element={<PrivateRouteUser isLogged={userLogged} />}>
        <Route path="/frontend/user/dashboard" element={<UserDashboard />} />
        <Route path="/frontend/user/profile" element={<UserProfile />} />
        <Route path="/frontend/user/contact" element={<UserContact />} />
        <Route path="/frontend/user/allcourses" element={<UserAllCourses />} />
      </Route>

      {/* Tutor */}
      <Route element={<PrivateRouteTutor isLogged={tutorLogged}/>}>
        <Route path="/frontend/tutor/dashboard" element={<Tutor />} />
        <Route path="/frontend/tutor/publish" element={<TutorPublish />} />
        <Route path="/frontend/tutor/contact" element={<TutorContact />} />
      </Route>


      {/* Login/Sign In */}
      <Route path="/frontend/login" element={<LoginForm isLogged={isUserLog} />} />
      <Route path="/frontend/logintutor" element={<LoginTutor isLogged={isTutorLog}/>} />
      <Route path="/frontend/register" element={<RegisterForm />} />
      <Route path="/frontend/regtutor" element={<TutorRegister />} />

      {/* Course */}
      <Route path="/frontend/machineLearning" element={<MachineLearning />} />
      <Route path="/frontend/pythonProgramming" element={<PythonProgramming />} />
    </Routes>

  );
}

export default App;
