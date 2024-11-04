import Page_Not_Found from "./Pages/Misc/Page_Not_Found.jsx";
import SignIn from "./Pages/Auth/SignIn/SignIn.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AllClubs from "./Pages/Clubs/AllClubs.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp/SignUp.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import ProfileCard from "./Pages/Profile/ProfilePage.jsx";
import ClubProfile from "./Pages/Clubs/ClubProfile.jsx";
function App() {
  return (
    <UserProvider>
      <div>
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/clubs" element={<AllClubs/>}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/profile' element={<ProfileCard />}/>
            <Route path="/clubs/:clubId" element={<ClubProfile />} />
            <Route element={<Page_Not_Found/>}/>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
};
export default App;
