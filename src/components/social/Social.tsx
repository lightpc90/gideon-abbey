import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, link: 'https://github.com/lightpc90/'},
    {icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/gideon-abbey-a8a350122/'},
    {icon: <FaTwitter/>, link: 'https://twitter.com/_lightpc_'},
]

const Social = ({containerStyle, iconStyle}: {containerStyle?: string, iconStyle?: string}) => {
  return (
      <div className={containerStyle}>
          {socials.map((social, index) => (
              <Link key={index} href={social.link} target='_blank' rel='noopener noreferrer'
              className={iconStyle}
              >
                  {social.icon}
              </Link>
          ))}
    </div>
  )
}

export default Social