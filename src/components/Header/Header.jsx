import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

export default function PageHeader({user, handleLogout}){

  const green = 'green'
  return (
    <Menu inverted>
      <Menu.Item href='/'>
        <img src='https://i.imgur.com/x6cJekds.png' />
      </Menu.Item>

      <Menu.Item 
      href='/'   
      name='Home' 
      color={green}
      />

      <Dropdown item text='Cannabis Products'>
        <Dropdown.Menu>
          <Dropdown.Item href='/edibles'>Edibles</Dropdown.Item>
          <Dropdown.Item href='/flowers'>Flowers</Dropdown.Item>
          <Dropdown.Item href='/seeds'>Seeds</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item 
      href='/studies'  
      name='Studies' 
      />

      <Menu.Item 
      href='/login'  
      name='Logout' 
      onClick={handleLogout}
      />

      {user && <Menu.Item href={`/${user.username}`}>
        <Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar/>
      </Menu.Item>}
    </Menu>
  )
}