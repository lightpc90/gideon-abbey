"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const path = usePathname()
    console.log("path: ", path)
  return (
      <div>
          {links.map((link, index) => (
              <Link href={link.path} key={index}
                  className={`${path === link.path && "text-accent border-b-2 border-accent" 
                      } capitalize mx-2 font-medium hover:text-accent transition-all`}
              >
                  {link.name}
              </Link>
          ))}
    </div>
  )
}

export default Nav