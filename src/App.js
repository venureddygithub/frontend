import React from "react";
import "./App.css";

import SignUp from "./SignUpPage/SignUp";
import SignIn from "./SignInPage/SignIn";
import Welcome from "./Welcome/Welcome";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<SignUp/>} />
        <Route path='/signin'element={<SignIn/>} />
        <Route path='/signup'element={<SignUp/>} />
        <Route path='/welcome'element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
