import React from "react";
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">Gideon Abbey</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com"><FaGithubSquare /></a>
                <a href="https://linkedin.com"><BsLinkedin /></a>
                <a href="https://instagram.com"><GrInstagram /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Gideon Abbey portfolio. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;