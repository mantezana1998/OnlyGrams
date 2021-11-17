import React, {useState, useEffect} from 'react';
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
  const [user, setUser] = useState(userService.getUser());
  const [product, setProduct] = useState([]);

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null)
  }

  useEffect(() => {
    const productUrl = `https://api.otreeba.com/v1/edibles?count=10&sort=-createdAt`

    fetch(productUrl)
      .then((res) => res.json ())
      .then(({data}) => {
        console.log(data, '<-- this is data from Otree')
        setProduct(data)
      }).catch((err) => {
        console.log(err, '<- ERROR ON APP.JS')
      })
  }, [])

  return (
      <Routes>
          <Route path='/' element={<Layout user={user} handleLogout={handleLogout}/>}>
            <Route index element={<Feed user={user}/>} />
            <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            
            <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            <Route path='/:username' element={<ProfilePage />} />
            <Route path='/products' element={<Products data={product}/>} />
          </Route>
      </Routes>
  );
}

export default App;
