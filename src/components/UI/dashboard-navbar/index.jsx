import AccountSet from '@/components/page/dashboard/account-settings'
import ChangePassword from '@/components/page/dashboard/change-password'
import EdetProfile from '@/components/page/dashboard/edit-profile'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DocsIcons, FlyIcons, LogoIcons } from '../icon'
import SettingMadal from '../madal/setting-madal'
import cls from './dashboardNavbar.module.scss'

export default function DashboardNavabr() {
  const pathname = usePathname()
  const [openMadal, setOpenMadal] = useState(false)
  const [openProfle, setOpenProfle] = useState(false)
  const [openAccount, setopenAccount] = useState(false)
  const [openPassword, setopenPassword] = useState(false)
  
  return (
    <div className={cls.DashboardNavabr}>
      <Link className={cls.DashboardNavabr__logo} href={'/dashboard/home'}>
        <LogoIcons />
      </Link>
      <div className={cls.DashboardNavabr__nav}>
          <Link href={'/dashboard/home/notes'}><DocsIcons color={pathname ==="/dashboard/home/notes" ? "#2454FF" : "#707682"}/></Link>
         <Link href={'/'}><FlyIcons /></Link>
        <div className={cls.DashboardNavabr__profile} onClick={()=>setOpenMadal(true)}>
          <Image
            src={'/Home/Profile.svg'}
            alt={"img"}
            width ={40}
            height ={40}
            />  
        </div>
      </div>
      {openMadal ? <>
        <SettingMadal
        name={"Alex Mayekovski"}
          email={"name@gmail.com"}
          editprofile={() => {
            setOpenProfle(true)
            setOpenMadal(false)
          }}
          accountOpen={() => {
            setopenAccount(true)
            setOpenMadal(false)
          }}
        />
        <div className={cls.DashboardNavabr__back} onClick={()=>setOpenMadal(false)}></div>
      </>
        : ""
      }

      {
        openProfle ? <EdetProfile close={()=>setOpenProfle(false)}/>:""
      }

      {openAccount ? <AccountSet close={() => setopenAccount(false)} openPassword={ ()=>setopenPassword(true)} /> : ""}
      
      {openPassword ? <ChangePassword  close={() => setopenPassword(false)}/>:""}
    </div>
  )
}
