import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import Layout from '../Layout/Layout';
import Feed from '../Feed/Feed';
import ProfilePage from "../ProfilePage/ProfilePage";
import Edibles from '../Edibles/Edibles';
import Studies from '../Studies/Studies';
import Flowers from '../Flowers/Flowers';
import Seeds from '../Seeds/Seeds';

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [product, setProduct] = useState([]);
  const [studies, setStudies] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [seeds, setSeeds] = useState([]);

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null)
  }

  // useEffect(() => {
  //   const productUrl = `https://api.otreeba.com/v1/edibles?count=10&sort=updatedAt`

  //   fetch(productUrl)
  //     .then((res) => res.json ())
  //     .then(({data}) => {
  //       setProduct(data)
  //     }).catch((err) => {
  //       console.log(err, '<- ERROR ON APP.JS')
  //     })
  // }, [])

  // useEffect(() => {
  //   const studiesUrl = `https://api.otreeba.com/v1/studies/conditions?count=10&sort=updatedAt`

  //   fetch(studiesUrl)
  //     .then((res) => res.json ())
  //     .then(({data}) => {
  //       setStudies(data)
  //     }).catch((err) => {
  //       console.log(err, '<- ERROR ON APP.JS')
  //     })
  // }, [])

  // useEffect(() =>{
  //   const flowersUrl = `https://api.otreeba.com/v1/flowers?page=3&count=20&sort=createdAt`

  //   fetch(flowersUrl)
  //   .then((res) => res.json ())
  //   .then(({data}) => {
  //     setFlowers(data)
  //   }).catch((err) => {
  //     console.log(err, 'Err on app.js')
  //   })
  // }, [])

  // useEffect(() =>{
  //   const seedsUrl = `https://api.otreeba.com/v1/seed-companies?count=10&sort=createdAt`

  //   fetch(seedsUrl)
  //   .then((res) => res.json ())
  //   .then(({data}) => {
  //     setSeeds(data)
  //   }).catch((err) => {
  //     console.log(err, 'Err on app.js')
  //   })
  // }, [])

  return (
      <Routes>
          <Route path='/' element={<Layout user={user} handleLogout={handleLogout}/>}>
            <Route index element={<Feed user={user}/>} />
            <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            
            <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
            <Route path='/:username' element={<ProfilePage />} />
            <Route path='/edibles' element={<Edibles data={product}/>} />
            <Route path='/studies' element={<Studies data={studies}/>} />
            <Route path='/flowers' element={<Flowers data={flowers} />} /> 
            <Route path='/seeds' element={<Seeds data={seeds} />} /> 
          </Route>
      </Routes>
  );
}

export default App;
