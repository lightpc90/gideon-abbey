import React from "react";
import './about.css';
import ME from '../../assets/me2.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>

                        <article className="about__card">
                            <FaUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>50+ clients Worldwide</small>
                        </article>

                        <article className="about__card">
                            <AiFillProject className="about__icon"/>
                            <h5>Projects</h5>
                            <small>90+ completed projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quos rem distinctio similique eum facere magnam maiores. 
                        Fugit unde aperiam incidunt odio mollitia nulla dicta cumque. 
                        Debitis saepe itaque quia vero?
                    </p>
                    <div className="">
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;