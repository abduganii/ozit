import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocsIcons, FlyIcons, LogoIcons } from '../icon'
import cls from './dashboardNavbar.module.scss'

export default function DashboardNavabr() {
  const pathname = usePathname()
  return (
    <div className={cls.DashboardNavabr}>
      <Link className={cls.DashboardNavabr__logo} href={'/dashboard/home'}>
        <LogoIcons />
        
         
      </Link>
      <div className={cls.DashboardNavabr__nav}>
          <Link href={'/dashboard/home/notes'}><DocsIcons color={pathname ==="/dashboard/home/notes" ? "#2454FF" : "#707682"}/></Link>
         <Link href={'/'}><FlyIcons /></Link>
        <div className={cls.DashboardNavabr__profile}>
          <Image
            src={'/Home/Profile.svg'}
            alt={"img"}
            width ={40}
            height ={40}
            />  
        </div>
      </div>
    </div>
  )
}
