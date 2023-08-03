import React from 'react'
import {Container, Grid, Card, Col, Row, Spacer, Button, Image, Text, Link} from '@nextui-org/react'

const HomeAutomationCard = () => {
    const projects = [
        {image: '/images/CCTV/cctv.jpeg', name: 'CCTV'},
        {image: '/images/lightAuto/home beautiful.jpg', name: 'Light Automation'},
        {image: '/images/gateAuto/gateAuto.jpg', name: 'Gate Automation'},
        {image: '/images/AC_Auto/ac automation.jpg', name: 'AC Automation'},
        {image: '/images/AccessControl/access control.jpg', name: 'Access Control'},
        {image: '/images/HomeSoundSystem/ceiling speakers.jpg', name: 'Home Sound System'},
        {image: '/images/hotelManagement/hotel management.webp', name: 'Hotel Managment'},
        {image: '/images/curtainAuto/curtain control.jpg', name: 'Curtain Automation'},
        {image: '/images/PrivateCinema/privateCinema.jpg', name: 'Private Cinema'},
    ]
  return (
    <Container css={{background: '$blue900', py: '$10'}}>
        {projects.map((project, index)=>(
            <Grid.Container direction='row' justify='center' gap={2} key={index}>
                <Grid md={4} sm={8}>
                    <Card>
                      <Image src={project.image} alt={project.name} />
                      <Card.Footer>
                        <Text b>{project.name}</Text>
                      </Card.Footer>  
                    </Card>
                </Grid>
            </Grid.Container>
        ))}
    </Container>
  )
}

export default HomeAutomationCard