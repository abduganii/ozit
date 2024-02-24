'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import cls from './siteBar.module.scss'

const arr = [
    {
        id: 1,
        text: "Curriculum",
        link: "/home/curriculum"
    },
    {
        id: 2,
        text: "About us",
        link: "/home/about-us"
    },
    {
        id: 4,
        text: "Consultation",
        link: "/home/consultation"
    },
    {
        id: 32,
        text: "Blog",
        link: "/home/blog"
    },
    {
        id: 3,
        text: "Price",
        link: "/home/price"
    },
  
    {
        id: 5,
        text: "Contact us",
        link: "/home/contact-us"
    }
]
export default function SiteBar({windowHeight}) {
    const pathName = usePathname()


    return (
        <ul className={cls.SiteBar}>
            {
                arr && arr?.map(e => (
                    <li key={e?.id} >
                        <Link
                            className={`
                            ${cls.SiteBar__link} ${pathName.includes(e?.link) ? cls.SiteBar__linkActive : ""} 
                            ${pathName.includes("/about-us")  && windowHeight< 810   ? cls.SiteBar__linkBalck : ""}
                            ${pathName.includes("/about-us") && windowHeight< 810  && e?.link == "/about-us" ? cls.SiteBar__linkBalckAvtive : ""}
                            `} href={e?.link}>
                            <div></div>  {e?.text}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
