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
        content='Seeds'
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
        content='"Seeds are not just the source of life. It is the very foundation of our being."'
        inverted
        style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
            marginBottom: '1em'
        }}
        />
        <Button primary size='huge' href='https://drcannabis.io/growing-marijuana-legally'>
        Growing Marijuana Legally
        <Icon name='right arrow' />
        </Button>
    </Container>
        <Divider />
        <Card.Group itemsPerRow={4}> 
        {props.data && props.data.map((seeds, i) => {
                return(
                <Card 
                color={colorArray[i]} 
                image={seeds.image}
                header={seeds.name}
                description={seeds.description}
                />
            )})}
        </Card.Group> 
    </>
    )
}
export default Products