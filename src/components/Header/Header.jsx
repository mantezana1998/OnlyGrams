import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){
    if(user){
        return (
            <Segment clearing>
                <Header as='h2' floated='right'>
                    <Link to="/"><Icon name="home"></Icon></Link>
                    <Link to='/login' onClick={handleLogout}>Logout</Link>
                    <h1 floated='left' color='green'>OnlyGrams</h1>
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