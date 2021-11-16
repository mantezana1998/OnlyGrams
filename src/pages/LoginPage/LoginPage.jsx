import React, {useState} from 'react';
import './LoginPage.css';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';

export default function LoginPage(props){
  
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
     email: '',
     password: ''
   })

   function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    });
   }

   async function handleSubmit(e){
    e.preventDefault();
    try{
      await userService.login(user)
      props.handleSignUpOrLogin();
      navigate('/')
    }catch(err){
      setError(err.message)
    }
   }

    return (
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' horizontalAlign='right'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
            <Image src='https://i.imgur.com/x6cJekds.png' /> Welcome!
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
      );
}

