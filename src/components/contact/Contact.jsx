import React from "react";
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qkk6zta', 'template_z40nlow', form.current, '_QtqTYQ1KUObNtBwI')
    
    e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                       <MdEmail className="contact__option-icon" />
                       <h4>Email</h4> 
                       <h5>{/*gideonabbey.f@gmail.com*/}</h5>
                       <a href="mailto:gideonabbey.f@gmail.com">Send a Message</a>
                    </article>

                    <article className="contact__option">
                       <BsWhatsapp className="contact__option-icon"/>
                       <h4>Whatsapp</h4> 
                       <h5>{/*(+234-813-085-3142)*/}</h5>
                       <a href="https://api.whatsapp.com/send?phone=2348130853142" target='_blank'>Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS*/}
                <div>
                    <form ref={form} onClick={sendEmail}>
                        <input type="text" name="name" placeholder="Your full name" required />
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;