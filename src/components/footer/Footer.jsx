import React from "react";
import './footer.module.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'
import { Link, Container, Text, Row, Col, Spacer } from "@nextui-org/react";


const Footer = () => {
    return (
        <footer id="footer">
            <Spacer y={6}/>
            <Container align='center'>
            <Link href="#" className="footer__logo"><Text size={25} weight='bold'>Gideon Abbey</Text></Link>
            <Spacer/>
            <ul className="permalinks">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
            </Container>
            <Spacer y={6}/>
            <Container display="flex" justify="center" >
                <Link href="https://github.com/lightpc90/" target='_blank' rel='noopener noreferrer'><FaGithubSquare size={40}/></Link>
                <Spacer/>
                <Link href="https://linkedin.com/in/gideon-abbey-a8a350122/" target='_blank' rel='noopener noreferrer'><BsLinkedin size={40}/></Link>
                <Spacer/>
                <Link href="https://instagram.com/24voltz_it_solutions" target='_blank' rel='noopener noreferrer'><GrInstagram size={40}/></Link>
                <Spacer/>
                <Link href="https://twitter.com/_lightpc_" target='_blank' rel='noopener noreferrer'><FaTwitter size={40} /></Link>
            </Container>
            <Container><Spacer y={6}/></Container>
            <Container align='center' >
                <small>&copy; Gideon Abbey portfolio. All rights reserved</small>
            </Container>
        </footer>
    )
}

export default Footer;