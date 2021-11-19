import React from 'react'
import './Flowers.css'
import { Card, Icon, Header, Container, Button, Divider } from 'semantic-ui-react'

const src = '/images/wireframe/white-image.png'

function Products(props){
    const colorArray = ['orange', 
    'yellow', 
    'olive', 
    'green', 
    'teal', 
    'blue', 
    'violet', 
    'purple', 
    'pink', 
    'brown', 
    'grey',]
    return (
    <>
        <div class='flowers'>
        <Container text>
        <Header
        as='h1'
        color='green'
        content='Flowers'
        textAlign='center'
        inverted
        style={{
            fontSize: '7em',
            fontWeight: 'normal',
            marginBottom: '3em',
            marginTop: '0',
        }}
        />
        <Button primary size='huge' href='https://disa.com/map-of-marijuana-legality-by-state'>
        Legal and Recreational States
        <Icon name='right arrow' />
        </Button>
    </Container>
    </div>
        <Divider />
        <Card.Group itemsPerRow={4}> 
        {props.data && props.data.map((flower, i) => {
                return(
                <Card 
                color={colorArray[i]} 
                image={flower.image}
                header={flower.name}
                description={flower.description}
                />
            )})}
        </Card.Group> 
    </>
    )
}
export default Products