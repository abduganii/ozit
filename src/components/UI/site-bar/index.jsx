'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import cls from './siteBar.module.scss'

const arr = [
    {
        id: 1,
        text: "Curriculum",
        link: "/curriculum"
    },
    {
        id: 2,
        text: "About us",
        link: "/about-us"
    },
    {
        id: 4,
        text: "Consultation",
        link: "/consultation"
    },
    {
        id: 32,
        text: "Blog",
        link: "/blog"
    },
    {
        id: 3,
        text: "Price",
        link: "/price"
    },
  
    {
        id: 5,
        text: "Contact us",
        link: "/"
    }
]
export default function SiteBar() {
    const pathName = usePathname()


    return (
        <ul className={cls.SiteBar}>
            {
                arr && arr?.map(e => (
                    <li key={e?.id} >
                        <Link
                            className={`
                            ${cls.SiteBar__link} ${pathName.includes(e?.link) ? cls.SiteBar__linkActive : ""} 
                            ${pathName.includes("/about-us") ? cls.SiteBar__linkBalck : ""}
                            ${pathName.includes("/about-us") && e?.link == "/about-us" ? cls.SiteBar__linkBalckAvtive : ""}
                            `} href={e?.link}>
                            <div></div>  {e?.text}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
