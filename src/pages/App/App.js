import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import Layout from '../Layout/Layout'
import Feed from '../Feed/Feed'
import ProfilePage from "../ProfilePage/ProfilePage";
import Products from '../Products/Products'

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
            <Route index element={<Feed user={user}/>} />
            <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            
            <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            <Route path='/:username' element={<ProfilePage />} />
            <Route path='/products' element={<Products />} />
          </Route>
      </Routes>
  );
}

export default App;
