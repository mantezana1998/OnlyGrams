import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: user 
  })
  .then(res => {
    if (res.ok) return res.json();
    console.log("if you have an error, you must check your server terminal!")
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  console.log(creds, '<--Creds')
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds) 
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}


function getProfile(username){
  return fetch(BASE_URL + username, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
      }
  }).then(res => {
    if(res.ok) return res.json()
    if(res.status === 404) throw new Error('User not Found')
    throw new Error('Bad Credentials') 
  })
}

export default {
  signup, 
  getUser,
  logout,
  login,
  getProfile
};