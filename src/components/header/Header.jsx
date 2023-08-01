import React from "react";
import style from './header.module.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Container, Spacer, Avatar} from "@nextui-org/react";
import Image from "next/image";


const Header = () => {
    return (
        <header id="home">
           
            <Container>
            <Container css={{p:"50px"}}></Container>
            <div className={style.header__container}>
                <Container css={{p:'$15'}} align='center'>
                    <Avatar size='xl' src='/images/me.jpg' alt='Gideon-Abbey-Avatar'/>
                </Container>
                <h5>Hello I&apos;m</h5>
                <h1>Gideon Abbey </h1>
                <h5 className="text_light">Fullstack developer | Home Automation Engineer</h5>
                <CTA />
                <HeaderSocials />
                <a href="#contact" className={style.scroll__down}>Scroll Down</a>
                
            </div>
            </Container>
            
        </header>
    )
}

export default Header;