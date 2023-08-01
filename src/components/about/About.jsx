import React from "react";
import style from './about.module.css';
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import Image from "next/image";
import { Container, Spacer, Card, Avatar, Text, Link, Button, Grid } from "@nextui-org/react";

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <Container display="flex" justify="center">
                <Avatar size='xl' src='/images/me.jpg' />
                <Grid.Container justify='center' gap={2}>
                    <Grid>
                        <Card css={{p:'$10'}}>
                            <Container align='center'>
                                <BsAward className={style.about__icon}/>
                                <h5>Experience</h5>
                                <small>3+ years working</small>
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
            <Container display="flex" direction="column" justify='center' css={{ "@md": {px:'300px'}  }}>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos rem distinctio similique eum facere magnam maiores. 
                    Fugit unde aperiam incidunt odio mollitia nulla dicta cumque. 
                    Debitis saepe itaque quia vero?
                </Text>
                <Spacer/>
                <Link href="#contact">
                    <Button size='sm' auto color='secondary' bordered ghost>Let&apos;s Talk</Button>
                </Link>
            </Container>    
        </section>
    )
}

export default About;