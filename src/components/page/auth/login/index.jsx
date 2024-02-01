import GlobalBtn from "@/components/UI/button/global-btn"
import { ApllyIcons, GoogleIcons } from "@/components/UI/icon"
import Image from "next/image"
import cls from "./auth.module.scss"

export default function LoginPage() {
  return (
    <div className={cls.LoginPage}>
      <div className={cls.LoginPage__contect}>
        <h3 className={cls.LoginPage__contect__title}>Log in</h3>
        <p className={cls.LoginPage__contect__text}>Welcome back! Please login to your account</p>
        <button className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__goole}`}><div><GoogleIcons/> </div> Log in with Google</button>
        <button className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__Apply}`}><ApllyIcons /> Log in with Apple</button>
        <p className={cls.LoginPage__contect__disc}>By logging in, you agree to our Privacy Policy and Terms of Service.</p>
        <button className={cls.LoginPage__contect__sigup}>Don’t have an account?  <span>Sign up</span></button>
      </div>
      <div  className={cls.LoginPage__image}>
          <Image
                src={'/Home/Group270988515.png'}
                layout='fill'
                objectFit='cover'
                alt={"img"}
            />
      </div>
    </div>
  )
}
