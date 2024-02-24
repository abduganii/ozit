'use client'
import DashboardNavabr from '@/components/UI/dashboard-navbar'
import { usePathname,useRouter } from 'next/navigation'

import React, { useEffect } from 'react'
import { deleteCookie } from "cookies-next";
import cls from "./authLayout.module.scss"
  

export default  function AuthLayout(props) {
    const router = useRouter()
    const pathName = usePathname()
        useEffect(() => {
            if (props.user == 401) {
                router.push('/home')
                deleteCookie('token')
            } 
        },
    [pathName]
    )
    return (
        <>
        <div className={cls.AuthLayout}>
            <DashboardNavabr/>
            {props.children}
        </div>
        </>
    )
}
