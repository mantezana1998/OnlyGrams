import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


export default function SignUpPage(props) {

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
            <Image src='https://i.imgur.com/x6cJekds.png' /> Sign Up
          </Header>
          <Form autoComplete="off">
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="Username"
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <Form.TextArea label='Bio' placeholder='How do you like to use marijuana?' name="bio" />
              <Form.Field>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                />
              </Form.Field>
              <Button
                type="submit"
                className="btn"
              >
                Signup
              </Button>
            </Segment>
            {/* {error ? <ErrorMessage error={error} /> : null} */}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
