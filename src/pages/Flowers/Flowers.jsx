import React from 'react'
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
        <Container text>
        <Header
        as='h1'
        color='green'
        content='Flowers'
        textAlign='center'
        inverted
        style={{
            fontSize: '3em',
            fontWeight: 'normal',
            marginBottom: '1em',
            marginTop: '1em',
        }}
        />
        <Header
        as='h2'
        color='green'
        content='"Cannabis is the single most versatile herbal remedy, and the most useful plant on Earth. No other single plant contains as wide a range of medically active herbal constituents."'
        inverted
        style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
            marginBottom: '1em'
        }}
        />
        <Button primary size='huge' href='https://disa.com/map-of-marijuana-legality-by-state'>
        Legal and Recreational States
        <Icon name='right arrow' />
        </Button>
    </Container>
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