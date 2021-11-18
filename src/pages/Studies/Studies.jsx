import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const src = '/images/wireframe/white-image.png'

function Studies(props){
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
        {props.data.map((data, i) => {
                return(
                <Card 
                color={colorArray[i]} 
                header={data.name}
                />
            )})}
        </Card.Group> 
    
    )
}
export default Studies