import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import style from './header.module.css'
import { Link, Text } from '@nextui-org/react'
import {FaTwitterSquare} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'
import {RiWhatsappFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className={style.header__socials}>
        <Link href="https://api.whatsapp.com/send?phone=2348130853142" target="_blank" rel="noopener noreferrer"><RiWhatsappFill size={25}/></Link>
        <Link href='https://www.linkedin.com/in/gideon-abbey-a8a350122/' target='_blank' rel='noopener noreferrer'><SiLinkedin size={25} /></Link>
        <Link href="https://github.com/lightpc90/" target='_blank' rel='noopener noreferrer'> <FaGithubSquare size={25} /> </Link>
        <Link href='https://twitter.com/_lightpc_' target='_blank' rel='noopener noreferrer'><FaTwitterSquare size={25} /></Link>
    </div>
  )
}

export default HeaderSocials