'use client'

import React from "react";
import style from './header.module.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Container} from "@nextui-org/react";
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
                    <h1 className="font-bold text-4xl">Gideon Abbey </h1>
                    <h5 className="intro" >Fullstack/Web3 developer | System Integrator</h5>
                    <h3 className="font-bold">+234(0)813 085 3142</h3>
                    <CTA />
                    <HeaderSocials />
                    <a href="#contact" className={style.scroll__down}>Scroll Down</a>

                </div>
            </Container>

        </header>
    )
}

export default Header;