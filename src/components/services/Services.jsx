import React from "react";
import style from './services.module.css';
import {BsCheck} from 'react-icons/bs'
import {Text, Container, Row, Spacer, Image, Divider, Button, Link} from '@nextui-org/react'

//importing the services icons ########
import {SiHiveBlockchain} from 'react-icons/si'
import {AiFillPieChart} from 'react-icons/ai'
import {VscServerProcess} from 'react-icons/vsc'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {BiSolidBusiness} from 'react-icons/bi'
import {FaBriefcase} from 'react-icons/fa'


const Services = () => {
    const services = [
        {image: ()=>{return(<AiFillPieChart/>)}, name: 'Utility Software'},
        {image: ()=>{return(<SiHiveBlockchain/>)}, name: 'Blockchain/Web3 Application'},
        {image: ()=>{return(<VscServerProcess/>)}, name: 'Web Application'},
        {image: ()=>{return(<BsFillCartCheckFill/>)}, name: 'E-Commerce Website'},
        {image: ()=>{return(<BiSolidBusiness/>)}, name: 'Business Websites'},
        {image: ()=>{return(<FaBriefcase/>)}, name: 'Personal Brand/Portfolio website'},
    ]
    return (
        <section id="services">
            <Spacer y={3}/>
            <Container css={{px: '$18'}}><Divider/></Container>
            <Spacer y={3}/>
            <Text align='center'>What I Offer</Text>
            <Text align='center' size={25} weight='bold'>Software Services</Text>
            <Spacer/>
            <Image src="/images/softwareImage.png"
            width={500} />
            <Spacer/>
            <Container display="flex" justify="center" align='center'>
                {services.map((service, index)=>(
                    <div key={index}>
                        <Spacer/>
                        <Text size={30}>{service.image()}</Text>
                        <Row justify="center" align="center">
                            <BsCheck className={style.service__list_icon}/>
                            <Text weight='bold' size={20}>{service.name}</Text>
                        </Row>
                    </div>
                ))}
            </Container>
            <Spacer/>
            <Row justify="center">
                <Link  href="#contact">
                    <Button  auto color='primary' bordered ghost>Let&apos;s Talk</Button>
                </Link>
                </Row>  
        </section>
    )
}

export default Services;