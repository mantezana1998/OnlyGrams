import React from 'react'
import { Card, Icon, Divider, Container, Header, Button } from 'semantic-ui-react'

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
        <Container text>
        <Header
        as='h1'
        color='green'
        content='Marijuana Scientific Studies'
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
        content='"Marijuana is quite possibly the finest of intoxicants. It has been scientifically proven, for decades, to be much less harmful to the body than alcohol when used on a regular basis."'
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
