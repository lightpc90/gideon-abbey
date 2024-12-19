'use client'

import React from "react";
import style from './header.module.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Container, Spacer, Avatar, Text } from "@nextui-org/react";
import Image from "next/image";


const Header = () => {
    return (
        <header id="home">

            <Container>
                <Container css={{ py: "50px" }}></Container>
                <div className={`${style.header__container} flex flex-col gap-6 items-center  `}>
                    <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-blue-800 shadow-md">
                        <Image src="/images/my pictures/profPix.png" alt="Gideon Abbey"
                            width={200} height={200}
                            className="h-full w-full object-center object-cover"
                        />
                    </div>
                    <h5>Hello, I&apos;m</h5>
                    <Text align='center' weight='bold' size={40}>Gideon Abbey </Text>
                    <h5 className="intro" >Blockchain/Web3 Developer | Fullstack developer | Home Automation Engineer</h5>
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