// import Login from "./Pages/Auth/Login/Login.jsx";
import SignUp2 from "./Pages/Auth/SignUp/SignUp2.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import React,{useEffect, useState} from 'react';
import HomePage from "./Pages/Home/HomePage.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Page_Not_Found from "./Pages/Misc/Page_Not_Found.jsx"
import Form from "./Pages/Misc/Form.js";
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path='/signup' element={<SignUp2/>}/>
        </Routes>
      </Router>
      {/* <Page_Not_Found/> */}
    </div>
  );
};
export default App;
