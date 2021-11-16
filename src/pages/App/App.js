import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import Layout from '../Layout/Layout'
import Feed from '../Feed/Feed'

function App() {
  console.log(userService)
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  return (
      <Routes>
          <Route path='/' element={<Layout user={user} handleSignUpOrLogin={handleSignUpOrLogin}/>} />
          <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
          
          <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      </Routes>
  );
}

export default App;
