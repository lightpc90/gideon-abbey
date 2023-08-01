import React from "react";
import style from './experience.module.css';
import {BsFillPatchCheckFill} from 'react-icons/bs' 
import { Card, Container, Link, Text, Spacer, Grid } from "@nextui-org/react";

const Experience = () => {
    return (
        <section id="experience">
            <h5>My Skills | My Services</h5>
            <Spacer/>
            <Grid.Container justify="center" gap={2}>
                <Grid>
                    <Card>
                        <Container css={{p:'$15'}}>
                        <Container css={{py:'$15'}} align='center'><h3>Software/Web3 Development</h3></Container>
                        
                    <div className={style.experience__content}>
                    <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>C</h4>
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
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Boosttrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>NoSql</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
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
                                <h4>Hardhat</h4>
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
                        </div>
                        </Container>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Container css={{p:'$15'}}>
                        <Container css={{py:'$10'}} align='center'><h3>Home Automation Services</h3></Container>
                       
                    <div className={style.experience__content}>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Light Automation</h4>  
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Surveilance Camera/CCTV</h4>
                                
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon} />
                            <div>
                                <h4>Access Control</h4>
                                
                            </div>
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Home Sound System</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Private Cinema</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>AC Automation</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Curtain Automation</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Office/Home Network</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Hotel and Hospitality</h4>
                            </div> 
                        </article>
                        <article className={style.experience__details}>
                            <BsFillPatchCheckFill className ={style.experience__details_icon}  />
                            <div>
                                <h4>Gate Automation</h4>
                            </div> 
                        </article>
                    </div> 
                        </Container>
                    </Card>
                </Grid>
            </Grid.Container>
        </section>
    )
}

export default Experience;