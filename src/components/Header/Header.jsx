import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function PageHeader({user, handleLogout}){

    const edibles = '/edibles'

    return (
      <Menu inverted>
        <Link to='/'>
            <Menu.Item>
                <img src='https://i.imgur.com/x6cJekds.png' />
            </Menu.Item>
        </Link>

        <Link to='/'>
            <Menu.Item name='OnlyGrams'  color='green'>
                Home
            </Menu.Item>
        </Link>

        <Dropdown item text='Cannabis Products'>
          <Dropdown.Menu>
            <Link to={edibles}><Dropdown.Item>Edibles</Dropdown.Item></Link>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to='/studies'>
            <Menu.Item name='Studies'>
                Studies
            </Menu.Item>
        </Link>

        <Link to='/login' onClick={handleLogout}>
            <Menu.Item name='Logout'>
                Logout
            </Menu.Item>
        </Link>
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

