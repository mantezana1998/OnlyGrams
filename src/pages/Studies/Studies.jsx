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
        {props.studies && props.studies.map((studies, i) => {
                return(
                <Card 
                color={colorArray[i]} 
                // image={studies.image}
                header={studies.name}
                // meta={studies.type}
                description={studies.keyFindings}
                // extra={studies.thc}
                />
            )})}
        </Card.Group> 
    
    )
}
export default Studies