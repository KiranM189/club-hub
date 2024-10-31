// import Login from "./Pages/Auth/Login/Login.jsx";
import SignIn from "./Pages/Auth/SignIn/SignIn.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import SignUp from "./Pages/Auth/SignUp/SignUp.jsx";
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
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
      {/* <Page_Not_Found/> */}
    </div>
  );
};
export default App;
