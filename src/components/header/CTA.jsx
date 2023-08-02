import React from "react";
import style from './header.module.css'
import {Button, Link, Spacer, Container} from '@nextui-org/react'

const CTA = () => {
    return (
        <div >
            <Spacer/>
            <Container justify="center" align='center' display="flex">
                <Link href='#'>
                    <Button bordered color='secondary' auto>Download CV</Button>
                </Link>
                <Spacer/>
                <Link href="#contact">
                    <Button bordered auto flat color='primary'>Let&apos;s Talk</Button>
                </Link>
            </Container>  
        </div>
    )
}

export default CTA;