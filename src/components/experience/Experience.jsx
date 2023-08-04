import React from "react";
import style from './experience.module.css';
import {BsFillPatchCheckFill} from 'react-icons/bs' 
import { Card, Container, Link, Text, Spacer, Grid, Row } from "@nextui-org/react";

const Experience = () => {
    const Projects = [
        {name: 'Light Automtion'},
        {name: 'Surveilance Camera/CCTV'},
        {name: 'Access Control'},
        {name: 'Home Sound System'},
        {name: 'Private Cinema'},
        {name: 'Curtain Automation'},
        {name: 'Gate Automation'},
        {name: 'AC Automation'},
        {name: 'Hotel Management System'},
        {name: 'Home/Office Networking'},
        {name: 'Premium Home Automation Service'},
    ]
    return (
        <div id="experience">
            <Spacer y={6}/>
            <Text justify='center' align='center'>My Skills </Text>
            <Text weight='bold' size={25} align='center'>My Experiences</Text>
            
            <Spacer/>
            <Grid.Container justify="center" gap={2}>
                <Grid>
                    <Card>
                        <Container css={{p:'$15'}}>
                            <Text weight='bold' align='center'>Software/Web3 Development</Text>
                            <Spacer/>
                        
                    <div className={style.experience__content}>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>React/Nextjs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Nodejs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Solidity</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Web3js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Hardhat</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>NoSql</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Vercel(CI/CD)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Django</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Git/Github (Version Control)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>C</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        </div>
                        </Container>
                    </Card>
                </Grid>


                 {/** ############ Home Autom
                <Grid>
                    <Card>
                        <Container css={{p: '$15'}} >
                            <Text weight='bold' align='center'>Home Automation Services</Text>
                            <Spacer/>
                            {Projects.map((project, index)=>(
                                <Grid.Container key={index}>
                                   <Grid>
                                        <Row justify="center" align="center">
                                            <BsFillPatchCheckFill />
                                            <Spacer x={0.3}/>
                                            <Text>{project.name}</Text>
                                        </Row> 
                                    </Grid>  
                                </Grid.Container>
                            ))}
                        </Container>
                    </Card>
                </Grid>
            ation Services #############*/}
            </Grid.Container>
        </div>
    )
}

export default Experience;