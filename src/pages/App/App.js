import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import Layout from '../Layout/Layout'
import Feed from '../Feed/Feed'
import ProfilePage from "../ProfilePage/ProfilePage";

function App() {
  console.log(userService)
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null)
  }

  return (
      <Routes>
          <Route path='/' element={<Layout user={user} handleLogout={handleLogout}/>}>
            <Route index element={<Feed />} />
            <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            
            <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            <Route path='/:username' element={<ProfilePage user={user} />} />
          </Route>
      </Routes>
  );
}

export default App;
