"use client"
import BlueBtn from "@/components/UI/button/blue-btn"
import GlobalBtn from "@/components/UI/button/global-btn"
import AuthInputMask from "@/components/UI/form/auth-input"
import AuthInput from "@/components/UI/form/auth-input"
import { ApllyIcons, GoogleIcons } from "@/components/UI/icon"
import AuthMadala from "@/components/UI/madal/auth-madal"
import Image from "next/image"
import { useState } from "react"
import cls from "./auth.module.scss"

export default function LoginPage() {
  const [ openMadal,setOpenMadal] = useState(false)
  return (
    <div className={cls.LoginPage}>
      <div className={cls.LoginPage__contect}>
        <h3 className={cls.LoginPage__contect__title}>Log in</h3>
        <p className={cls.LoginPage__contect__text}>Welcome back! Please login to your account</p>
        <button className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__goole}`}><div><GoogleIcons/> </div> Log in with Google</button>
        <button className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__Apply}`}><ApllyIcons /> Log in with Apple</button>
        <p className={cls.LoginPage__contect__disc}>By logging in, you agree to our Privacy Policy and Terms of Service.</p>
        <button className={cls.LoginPage__contect__sigup} onClick={()=>setOpenMadal(1)}>Don’t have an account?  <span>Sign up</span></button>
      </div>
      <div  className={cls.LoginPage__image}>
          <Image
                src={'/Home/Group270988515.png'}
                layout='fill'
                objectFit='cover'
                alt={"img"}
            />
      </div>

      {openMadal == 1? <AuthMadala close={()=>setOpenMadal(false)}>
        <h3 className={cls.AuthMadala__title}>Enter your number</h3>
        <p className={cls.AuthMadala__text}>To ensure the security and privacy of your account, we require phone verification</p>
        <AuthInputMask
              placeholder={"Phone number"}
              mask="+\9\9\8 (99) 999-99-99"
            />
        <button className={cls.AuthMadala__btn} onClick={()=>setOpenMadal(2)}>Send code</button>
      </AuthMadala>:""
      }
      {openMadal == 2? <AuthMadala close={()=>setOpenMadal(false)}>
        <h3 className={cls.AuthMadala__title}>Enter code</h3>
        <p className={cls.AuthMadala__text}>We have sent a verification code to your phone number: +998 ***** 78 00</p>
        <AuthInput label={'Enter code'} placeholder={"code"} type={"password"} />
        <button className={cls.AuthMadala__btn}>Submit</button>
      </AuthMadala>:""
      }
    </div>
  )
}
