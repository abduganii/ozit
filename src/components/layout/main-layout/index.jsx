'use client'
import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import { usePathname,useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { deleteCookie,getCookie } from "cookies-next";
export default function MainLayout(props) {
    const router = useRouter()
    const pathName = usePathname()
        useEffect(() => {
            if (getCookie("token")) {
                deleteCookie('token')
            } 
        },
    [pathName]
    )
    return (
        <>
            <Header session={props?.session}/>
            {props?.children}
            <Footer />
        </>
    )
}
