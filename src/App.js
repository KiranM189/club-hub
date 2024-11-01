// import Login from "./Pages/Auth/Login/Login.jsx";
import SignIn from "./Pages/Auth/SignIn/SignIn.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp/SignUp.jsx";
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          {/* <Route path='/signup' element={<SignUp/>}/> */}
        </Routes>
      </Router>
      {/* <Page_Not_Found/> */}
    </div>
  );
};
export default App;
