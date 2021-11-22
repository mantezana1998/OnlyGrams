import React from 'react'
import './Edibles.css';
import { Card, Icon, Container, Header, Button, Divider } from 'semantic-ui-react'

function Products(props){
    const colorArray = [
    'orange', 
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
        <div class='edible'>
            <Container text >
                <Header
                as='h1'
                color='green'
                content='Edibles'
                inverted
                style={{
                    fontSize: '5em',
                    fontWeight: 'normal',
                    marginBottom: '1em',
                }}
                />
                <Button primary size='huge' href='https://ediblesmagazine.com/tag/420-recipes/'>
                    420 Recipes Here
                    <Icon name='right arrow' />
                </Button>
            </Container>
        </div>
        <Divider />
        <Card.Group itemsPerRow={4}> 
            {props.data && props.data.map((product, i) => {
                    return(
                    <Card 
                    color={colorArray[i]} 
                    image={product.image}
                    header={product.name}
                    meta={product.type}
                    description={product.description}
                    extra={product.thc}
                    />
                )})}
        </Card.Group> 
    </>
    )
}
export default Products