import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Button } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){
    if(user){
        return (
            <Segment clearing>
                <Header as='h2' floated='right'>
                    <Button inverted color='green'><Link to="/"><Icon name="home"></Icon></Link></Button>
                    <Button inverted color='green'><Link to='/login' onClick={handleLogout}>Logout</Link></Button>
                    <Button inverted color='green'><Link to='/'></Link><h1 floated='left'>OnlyGrams</h1></Button>
                    <Button inverted color='green'><Link to='/products'>Products</Link></Button>
                    <Button inverted color='green'><Link to='/studies'>Studies</Link></Button>
                </Header>
                <Header as='h2' floated='left'>
                    <Link to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
                </Header>
            </Segment>
        )
    }

    return (
        <div></div>
    )

}
