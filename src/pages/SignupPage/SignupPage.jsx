import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


export default function SignUpPage(props) {

const navigate = useNavigate();  
const [error, setError] = useState('')
const[selectedFile, setSelectedFile] = useState('')
const [state, setState] = useState({
  username: '',
  email: '',
  password: '',
  passwordConf: '',
  bio: '',
})

  function handleChange(e){
    let name = e.target.name
    let value = e.target.value
    setState({
      ...state,
      [name]: value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedFile);
    for(let key in state){
      formData.append(key, state[key])
    }
    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin()
      navigate('/')
    }catch(err){
      console.log(err.message)
      setError(err.message)
    }
  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' horizontalAlign='right'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
            <Image src='https://i.imgur.com/x6cJekds.png' /> Sign Up
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="Username"
                value={state.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.TextArea 
              label='Bio' 
              placeholder='How do you like to use marijuana?' 
              name="bio" 
              value={state.bio}
              onChange={handleChange}
              />
              <Form.Field>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileInput}
                />
              </Form.Field>
              <Button
                type="submit"
                className="btn"
              >
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
