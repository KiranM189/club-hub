// import Login from "./Pages/Auth/Login/Login.jsx";
// import SignUp from "./Pages/Auth/SignUp/SignUp.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import React,{useEffect, useState} from 'react';
import HomePage from "./Pages/Home/HomePage.jsx";
// import Page_Not_Found from "./Pages/Misc/Page_Not_Found.jsx"
import Form from "./Pages/Misc/Form.js";
function App() {
  return (
    <div>
      <Navbar/>
      <Form/>
      {/* <HomePage /> */}
      {/* <Page_Not_Found/> */}
    </div>
  );
};
export default App;
