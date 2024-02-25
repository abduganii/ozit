'use client'
import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { deleteCookie,getCookie } from "cookies-next";
export default function MainLayout(props) {
    const pathName = usePathname()
    const searchParams = useSearchParams()
        useEffect(() => {
            if (getCookie("token")) {
                if (!searchParams.get('opnemadal')) {
                    deleteCookie('token')
                }
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
