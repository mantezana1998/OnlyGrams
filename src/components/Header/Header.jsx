import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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

        <Link to={`/${user.username}`}>
            <Menu.Item>
                <Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar/>
            </Menu.Item>
         </Link> 
      </Menu>
    )
  }


// if(user){
//     return (
//         <Segment inverted>
//             <Header>
//                 <Header as='h2' textAlign='right'>
//                     <Button inverted color='green'>
//                         <Link to='/login' onClick={handleLogout}>
//                             Logout
//                         </Link>
//                     </Button>
//                 </Header>

//                 <Header as='h1' textAlign='center'>
//                     <Button inverted color='green'>
//                         <Link to='/'/>
//                             OnlyGrams
//                     </Button>
//                 </Header>

//                 <Header as='h2' textAlign='right'>
//                     <Button inverted color='green'>
//                         <Link to='/products'>
//                             Products
//                         </Link>
//                     </Button>
//                 </Header>

//                 <Button inverted color='green'>
//                     <Link to='/studies'>
//                         Studies
//                     </Link>
//                 </Button>
//             </Header>
//             <Header as='h2' floated='left'>
//                 <Link to={`/${user.username}`}>
//                     <Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar/>
//                 </Link>          
//             </Header>
//         </Segment>
//     )
// }

// return (
//     <div></div>
// )

