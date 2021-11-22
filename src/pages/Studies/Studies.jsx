import React from 'react'
import './Studies.css'
import { Card, Icon, Divider, Container, Header, Button } from 'semantic-ui-react'

function Studies(props){
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
    'grey'
]
    return (
    <>
        <div class='Studies'>
            <Container text>
                <Header
                as='h1'
                color='green'
                content='Marijuana Scientific Studies'
                style={{
                    fontSize: '5em',
                    fontWeight: 'normal',
                    marginBottom: '1em',
                }}
                />
                <Button 
                primary size='huge' 
                href='https://disa.com/map-of-marijuana-legality-by-state'
                >
                    Legal and Recreational States
                    <Icon name='right arrow' />
                </Button>
            </Container>
        </div>
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
