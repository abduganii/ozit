'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DownIcons } from "../icon"
import cls from "./dashbars.module.scss"

const navbarArr = [{
  id: 1,
  text: "Video",
  link: "/dashboard/lesson/",
  secondLink:"/vidoe"
},
{
  id: 2,
  text: "Text tutorial",
  link: "/dashboard/lesson/",
  secondLink:"/text"
},
{
  id: 3,
  text: "Exercises",
  link: "/dashboard/lesson/",
  secondLink:"/exercises"
}
]
export default function DashboardHeader({ currentLesson ,OpenMadal,sprintId}) {
  const pathName = usePathname()
   
  return (
    <header className={cls.DashboardHeader}>
      {navbarArr &&<ul className={cls.DashboardHeader__navBar}>
        {navbarArr?.map(e => (
          <li  className={cls.DashboardHeader__navBar__item}
            key={e?.id}><Link className={`${cls.DashboardHeader__navBar__list} ${pathName.includes(e?.secondLink) ? cls.DashboardHeader__navBar__listActive : ""}`} href={`${e?.link}${sprintId}${e?.secondLink}`}>{e?.text}</Link></li>
      ))}
      </ul>}
      <div className={cls.DashboardHeader__pogination}>
        <div className={`${cls.DashboardHeader__pogination__btn} ${cls.DashboardHeader__pogination__btndisable}`}><DownIcons/></div>
        <div className={cls.DashboardHeader__pogination__btn} onClick={OpenMadal}>{currentLesson}  <div><DownIcons/></div></div>
        <div className={cls.DashboardHeader__pogination__btn}><DownIcons/></div>
      </div>
    </header>
  )
}
