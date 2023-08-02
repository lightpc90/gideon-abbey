import React from "react";
import style from './header.module.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Container, Spacer, Avatar, Text} from "@nextui-org/react";
import Image from "next/image";


const Header = () => {
    return (
        <header id="home">
           
            <Container>
            <Container css={{p:"50px"}}></Container>
            <div className={style.header__container}>
                <Container css={{p:'$15'}} align='center'>
                    <Avatar css={{zIndex: '0'}} bordered color='gradient' src="/images/my pictures/dp2.png" className="w-40 h-40 text-large" />
                </Container>
                <h5>Hello, I&apos;m</h5>
                <Text align='center' weight='bold' size={40}>Gideon Abbey </Text>
                <h5 className="text_light">Blockchain/Web3 Developer | Fullstack developer | Home Automation Engineer</h5>
                <Text weight='bold'>+234(0)813 085 3142</Text>
                <CTA />
                <HeaderSocials />
                <a href="#contact" className={style.scroll__down}>Scroll Down</a>
                
            </div>
            </Container>
            
        </header>
    )
}

export default Header;