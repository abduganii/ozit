import Link from "next/link"
import cls from "./dashbars.module.scss"

const navbarArr = [{
  id: 1,
  text: "Video",
  link:"/dashboard/vidoe"
},
{
  id: 2,
  text: "Text tutorial",
  link:"/dashboard/tutorial"
},
{
  id: 3,
  text: "Exercises",
  link:"/dashboard/wxercises"
}
]
export default function DashboardHeader() {
  return (
    <header className={cls.DashboardHeader}>
      <ul className={cls.DashboardHeader__navBar}>
        
      </ul>
    </header>
  )
}
