// import Login from './Pages/Auth/Login/Login.jsx'
// import SignUp from './Pages/Auth/SignUp/SignUp.jsx';
// import Example  from './Pages/Misc/Page_Not_Found.js';
// import SignUp from './Pages/Auth/SignUp/SignUp.jsx';
import Navbar2 from "./components/NavBar/NavBar2.jsx";
import React,{useEffect, useState} from 'react';
// import Form from "./Pages/Misc/Form";
// import HomePage from "./Pages/Home/HomePage.jsx";
function App() {
  const curr_theme =localStorage.getItem("curr_theme")
  const [theme,setTheme] = useState(curr_theme?curr_theme:'light');
  useEffect(()=>{
    localStorage.setItem('curr_theme',theme)
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar2 theme={theme} setTheme={setTheme}/>
    </div>
  );
};
export default App;
