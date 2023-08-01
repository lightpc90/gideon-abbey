import React from "react";
import style from './services.module.css';
import {BsCheck} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className={style.service__container}>
                <article className={style.service}>
                    <div className={style.service__head}>
                        <h3>Web Development</h3>
                    </div>

                    <ul className={style.service__list}>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

{/*===================================End of Web development==================================*/}

                <article className={style.service}>
                    <div className={style.service__head}>
                        <h3>Home automation</h3>
                    </div>

                    <ul className={style.service__list}>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>


  {/*===================================End of Home Automation==================================*/}
                <article className={style.service}>
                    <div className={style.service__head}>
                        <h3>Private Cinema Installation</h3>
                    </div>

                    <ul className={style.service__list}>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={style.service__list-icon}/>
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