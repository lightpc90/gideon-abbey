import React from "react";
import style from './about.module.css';
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import Image from "next/image";
import { Container, Spacer, Card, Row, Avatar, Text, Link, Button, Grid } from "@nextui-org/react";

const About = () => {
    return (
        <div id="about">
            <Spacer y={6}/>
            <Text align='center'>Get to Know</Text>
            <Text align='center' weight='bold' size={25}>About Me</Text>
            <Container display="flex" justify="center">
                <Avatar size='xl' src='/images/me.jpg' />
                <Grid.Container justify='center' gap={2}>
                    <Grid>
                        <Card css={{p:'$10'}}>
                            <Container align='center'>
                                <BsAward className={style.about__icon}/>
                                <h5>Experience</h5>
                                <small>5+ years working</small>
                            </Container>  
                        </Card>
                    </Grid>
                    <Grid>
                        <Card css={{p:'$10'}}>
                            <Container align='center'>
                                <FaUsers className={style.about__icon}/>
                                <h5>Clients</h5>
                                <small>50+ clients Worldwide</small>
                            </Container>  
                        </Card>  
                    </Grid>
                    <Grid>
                        <Card css={{p:'$10'}}>
                            <Container align='center'>
                                <AiFillProject className={style.about__icon}/>
                                <h5>Projects</h5>
                                <small>90+ completed projects</small>
                            </Container>  
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>
            <Spacer/>
            <Container display="flex" direction="column" justify='center' css={{ "@md": {px:'500px'}  }}>
                <Text weight='bold' align='center'>Meet Gideon Abbey</Text>
                <Text size={20} justify='center'>
                 ...a visionary software developer and home automation engineer. 
                With an unwavering passion for blockchain and Web3 solutions, I craft seamless, cutting-edge solutions that redefine the future. 
                Join me on this journey of boundless innovation and let's shape a better world together. 
                Explore my portfolio and discover the power of technology and human ingenuity in action. 
                Welcome to the future. 
                <span role="img" aria-label="Handshake">{"\u{1F91D}"}</span>
                </Text>
                <Spacer/>
                <Row justify="center">
                <Link  href="#contact">
                    <Button  auto color='primary' bordered ghost>Let&apos;s Talk</Button>
                </Link>
                </Row>      
            </Container>    
        </div>
    )
}

export default About;