import React from "react";
import style from './contact.module.css';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { Container, Button, Input, Textarea, Link, Spacer, Col, Row, Text, Divider } from "@nextui-org/react";
import Messages from '../../helpersFunction/Messages'

import {sendEmail} from '../../helpersFunction/sendEmail'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formFilled, setFormFilled] = useState(false)
    const [isBlur, setIsBlur] = useState(false)

    const isFormFilled = ()=>{
        if(name && email && message){
            setFormFilled(true)
        }
        else{setFormFilled(false)}
    }

    useEffect(()=>{
        isFormFilled()
    }, [name, email, message])

    //function to reset back the zoom to normal when using input components
    useEffect(()=>{
        const handleBlur = ()=>{
            // Reset the zoom level to 1
          document.body.style.zoom = 1;
        }
        handleBlur()
    }, [isBlur])



    const handleSendMessage = ()=>{
        const formData = {name: name, email: email, message: message}
        Messages(formData)
        setIsBlur(true)
        alert('Message not sent! Kindly contact me via the other means. Thanks')
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <section id="contact">
            <Spacer y={3}/>
            <Container css={{ px:'$18', '@md':{px: '400px'}}}><Divider/></Container>
            <Spacer y={3}/>
            <Text align='center'>Get In Touch</Text>
            <Text align='center' weight='bold' size={25}>Contact Me</Text>
            <Spacer/>
            <Container display="flex" justify="center" direction="column" gap={2}>
                <Col align='center'>
                    <MdEmail className={style.contact__option_icon} />
                    <h4>Email</h4> 
                    <h5>{/*gideonabbey.f@gmail.com*/}</h5>
                    <Link href="mailto:gideonabbey.f@gmail.com">Send a Message</Link>
                </Col>
                <Spacer y={2}/>
                <Col align='center'>
                <BsWhatsapp className={style.contact__option_icon}/>
                       <h4>Whatsapp</h4> 
                       <h5>{/*(+234-813-085-3142)*/}</h5>
                       <Link href="https://api.whatsapp.com/send?phone=2348130853142" target='_blank'>Send a Message</Link>
                </Col>

                {/** contact form */}
                <Spacer y={4}/>
                <Text b align='center'>Send me a Message</Text>
                <Spacer />
                <Row justify='center' >
                    <Input aria-labelledby="full name" name="Full Name"  value={name} onChange={(e)=>setName(e.target.value)} bordered width="500px" color="primary" placeholder="Your Full Name" />
                </Row>
                <Spacer/>
                <Row justify='center' >
                    <Input aria-labelledby="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} bordered width="500px" color="primary" placeholder="Your Email" />
                </Row>
                <Spacer/>
                <Row justify='center' >
                    <Textarea aria-labelledby="message" name='message'  value={message} onChange={(e)=>setMessage(e.target.value)} width="500px" bordered color="primary" placeholder="Your Message" />
                </Row>
                <Spacer/>
                <Row justify="center"><Button disabled={!formFilled} onPress={handleSendMessage} bordered color='primary' >Send Message</Button></Row>
            </Container>
            <Spacer y={3}/>
        </section>
    )
}

export default Contact;