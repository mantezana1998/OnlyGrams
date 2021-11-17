import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

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
    
    )
}
export default Products