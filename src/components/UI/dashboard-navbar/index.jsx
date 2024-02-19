import AccountSet from '@/components/page/dashboard/account-settings'
import ChangePassword from '@/components/page/dashboard/change-password'
import EdetProfile from '@/components/page/dashboard/edit-profile'
import Subscription from '@/components/page/dashboard/subscription'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Cookies from 'js-cookie';
import { DeleteWhiteIcons, DocsIcons, FlyIcons, LogoIcons, LogoutIcons } from '../icon'
import PaPap from '../madal/papap-modal'
import SettingMadal from '../madal/setting-madal'
import cls from './dashboardNavbar.module.scss'
import {signIn, signOut, useSession } from "next-auth/react";
import {log} from "next/dist/server/typescript/utils";
import Loader from '../loader'



export default function DashboardNavabr() {
  const [loader,setLoader] = useState(false)
  const pathname = usePathname()
  const [openMadal, setOpenMadal] = useState(false)
  const [openProfle, setOpenProfle] = useState(false)
  const [openAccount, setopenAccount] = useState(false)
  const [openPassword, setopenPassword] = useState(false)
  const [openDelete, setopenDelete] = useState(false)
  const [subscription, setSubscription] = useState(false)
  const [logout, setlogout] = useState(false)
  const router = useRouter()
  const logOutFunciton = async () => {
      setLoader(true)
      setlogout(false)
        await signOut('google')
        Cookies.remove('token')
        router.refresh();
    }
  
  return (
    <div className={cls.DashboardNavabr}>
      <Link className={cls.DashboardNavabr__logo} href={'/dashboard/home'}>
        <LogoIcons />
      </Link>
      <div className={cls.DashboardNavabr__nav}>
          <Link    href={'/dashboard/home/notes'}><DocsIcons color={pathname ==="/dashboard/home/notes" ? "#2454FF" : "#707682"}/></Link>
         <div className={cls.DashboardNavabr__nav__fly} onClick={()=>setSubscription(true)}><FlyIcons /></div>
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

          logout={() => {
            setlogout(true)
            setOpenMadal(false)
          }}
        />
        <div className={cls.DashboardNavabr__back} onClick={()=>setOpenMadal(false)}></div>
      </>
        : ""
      }
      {openProfle ? <EdetProfile close={()=>setOpenProfle(false)}/>:""}
      {openAccount ? <AccountSet close={() => setopenAccount(false)}
        openPassword={() => setopenPassword(true)}
        openDelete={() => setopenDelete(true)} /> : ""}
      
      {openPassword ? <ChangePassword close={() => setopenPassword(false)} /> : ""}
      
      {
        logout ? <PaPap
        color={"#F2F2F2"}
        icons={LogoutIcons()}
        title={"Log out "}
        text={"Are you sure you want to leave from your account? "}
        btnText={"Log out "}
        logout={()=>logOutFunciton()}
        close={() => setlogout(false)} />
          : ""
      }
      
      {/* {
        openDelete ? <PaPap
        color={"#E32A1A"}
        icons={DeleteWhiteIcons()}
        title={"Delete account "}
        text={"re you sure you want to delete your account? "}
        btnText={"Delete"}
        close={() => setopenDelete(false)} />
          : ""
      } */}
      
      {subscription?
        <Subscription close={() => setSubscription(false)} />
        : ""}
      
        {loader? <Loader/>:""}
    </div>
  )
}
