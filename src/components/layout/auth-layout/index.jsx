'use client'
import DashboardHeader from '@/components/UI/dashboard-header'
import DashboardNavabr from '@/components/UI/dashboard-navbar'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import cls from "./authLayout.module.scss"

export default function AuthLayout({ children }) {
    const router = useRouter()
    useEffect(() => {
        router.push('/dashboard/home') 
    },[])
    return (
        <div className={cls.AuthLayout}>
            <DashboardNavabr/>
            {children}
          
        </div>
    )
}
