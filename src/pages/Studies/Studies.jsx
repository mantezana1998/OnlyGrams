import React from 'react'
import { Card, Icon, Image, Grid, Divider } from 'semantic-ui-react'

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
        <>
        <Divider />
            <Card.Group itemsPerRow={4}> 
            {props.data && props.data.map((data, i) => {
                    return(
                    <Card 
                    color={colorArray[i]} 
                    header={data.name}
                    />
                )})}
            </Card.Group> 
        </>
    )
}
export default Studies
