import React from "react";
import style from './header.module.css'
import {Button, Link, Spacer, Container, Row} from '@nextui-org/react'

const CTA = () => {
    return (
        <div >
            <Spacer/>
            <Row justify="center" align='center' >
                <Link href='#'>
                    <Button bordered color='secondary' auto>Download CV</Button>
                </Link>
                <Spacer/>
                <Link href="#contact">
                    <Button bordered auto flat color='primary'>Let&apos;s Talk</Button>
                </Link>
            </Row>  
        </div>
    )
}

export default CTA;