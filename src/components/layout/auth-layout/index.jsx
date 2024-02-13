'use client'
import DashboardNavabr from '@/components/UI/dashboard-navbar'
import { usePathname,useRouter } from 'next/navigation'

import React, { useEffect } from 'react'
import cls from "./authLayout.module.scss"
export default function AuthLayout(props) {
    const router = useRouter()
    const pathName = usePathname()
        useEffect(() => {
            if (!props.token) {
                router.push('/home')
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
