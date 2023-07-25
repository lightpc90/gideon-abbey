import React from "react";
import './services.css';
import {BsCheck} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

{/*===================================End of Web development==================================*/}

                <article className="service">
                    <div className="service__head">
                        <h3>Home automation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>


  {/*===================================End of Home Automation==================================*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Private Cinema Installation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

  {/*===================================End of Private Cinema Installation==================================*/}
            </div>
        </section>
    )
}

export default Services;