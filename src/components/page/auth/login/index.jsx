"use client"
import AuthInputMask from "@/components/UI/form/auth-input-mask"
import { ApllyIcons, GoogleIcons } from "@/components/UI/icon"
import AuthMadala from "@/components/UI/madal/auth-madal"
import Image from "next/image"
import { useState } from "react"
import cls from "./auth.module.scss"
import {signIn, signOut, useSession } from "next-auth/react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import axios_init from "@/utils/axios_init"
import AuthInput from "@/components/UI/form/auth-input"
import Loader from "@/components/UI/loader"
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const [openMadal, setOpenMadal] = useState(searchParams.get('opnemadal')||false)
  const { register, handleSubmit, reset, clearErrors, setError, setValue, watch } = useForm();
  const watchedFiles = watch()
  const router = useRouter()
  const [loader,setLoader] = useState(false)
 
  
  const RegisterPhone = async (data) => { 
    await axios_init.post('/accounts/register/phone-number/', data)
    .then(res =>  setOpenMadal(2))
    .catch(err => console.error(err))
  
  }
  
  const ConfirmPhone = async (data) => {
    await axios_init.post('/accounts/confirm/phone-number/', data)
      .then(res => {
        Cookies.set('token', res.tokens.access)
        if (res.status == "active") {
          router.push('/dashboard/home')
        }
      })
    .catch(err => console.error("err",err))
    
  }
  console.log(window.location.origin)
  return (
    <div className={cls.LoginPage}>
      <div className={cls.LoginPage__contect}>
        <h3 className={cls.LoginPage__contect__title}>Log in</h3>
        <p className={cls.LoginPage__contect__text}>Welcome back! Please login to your account</p>
        
        <button
          className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__goole}`}
          onClick={() => {
            setLoader(true)
            signIn('google', {
            callbackUrl: `${window.location.origin}/auth/google`
            })
          }}>
          <div><GoogleIcons /></div>
          Log in with Google
        </button>

        <button
          className={`${cls.LoginPage__contect__btn} ${cls.LoginPage__contect__Apply}`}>
          <ApllyIcons /> Log in with Apple
        </button>

        <p className={cls.LoginPage__contect__disc}>By logging in, you agree to our Privacy Policy and Terms of Service.</p>

        <button
          className={cls.LoginPage__contect__sigup}>
          Don’t have an account?  <span>Sign up</span>
        </button>

      </div>
      <div  className={cls.LoginPage__image}>
          <Image
                src={'/Home/Group270988515.png'}
                layout='fill'
                objectFit='cover'
                alt={"img"}
            />
      </div>

      { openMadal == 1 ? <AuthMadala close={() => setOpenMadal(false)}>
        <form onSubmit={handleSubmit(RegisterPhone)}>
          <h3 className={cls.AuthMadala__title}>Enter your number</h3>
          <p className={cls.AuthMadala__text}>To ensure the security and privacy of your account, we require phone verification</p>
          <AuthInputMask
            placeholder={"Phone number"}
            mask="+\9\9\8 99 999-99-99"
            value={watchedFiles?.phone_number ||""}
            register={...register('phone_number',{required:"phone number is required"})}
              />
          <button type="submit"
            className={cls.AuthMadala__btn}>
            Send code
          </button>
      </form>
      </AuthMadala>:""
      }
      {openMadal == 2 ? <AuthMadala close={() => setOpenMadal(false)}>
        <form onSubmit={handleSubmit(ConfirmPhone)}>
          <h3 className={cls.AuthMadala__title}>Enter code</h3>
          <p className={cls.AuthMadala__text}>We have sent a verification code to your phone number: +998 ***** 78 00</p>
          <AuthInput
            label={'Enter code'}
            placeholder={"code"}
            type={"password"}
            value={watchedFiles?.code ||""}
            register={...register('code',{required:"code is required"})}
          />
          <button type="submit" className={cls.AuthMadala__btn}>Submit</button>
        </form>
      </AuthMadala>:""
      }

     {loader? <Loader/>:""}
    </div>
  )
}
