'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { DownIcons } from "../icon"
import cls from "./dashbars.module.scss"
import { useSearchParams } from 'next/navigation'
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
  const [left, setleft] = useState(0)
  const searchParams = useSearchParams()

  return (
    <header className={cls.DashboardHeader}>
      {navbarArr &&<ul className={cls.DashboardHeader__navBar}>
        {navbarArr?.map((e,i) => (
          <li  className={cls.DashboardHeader__navBar__item}
            key={e?.id}><Link className={`${cls.DashboardHeader__navBar__list}`} onClick={()=>setleft(i * 90.6)} href={`${e?.link}${sprintId}${e?.secondLink}?sprint=${searchParams.get("sprint")}&lesson=${searchParams.get("lesson")}`}>{e?.text}</Link></li>
      ))}
      <div className={cls.DashboardHeader__navBar__animatin} style={{left:left+3}}></div>
      </ul>}
      <div className={cls.DashboardHeader__pogination}>
        <div className={`${cls.DashboardHeader__pogination__btn} ${cls.DashboardHeader__pogination__btndisable}`}><DownIcons/></div>
        <div className={cls.DashboardHeader__pogination__btn} onClick={OpenMadal}>{currentLesson}  <div><DownIcons/></div></div>
        <div className={cls.DashboardHeader__pogination__btn}><DownIcons/></div>
      </div>
    </header>
  )
}
