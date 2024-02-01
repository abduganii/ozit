'use client'
import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import React, { useEffect } from 'react'
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/utils/auth";
import { useRouter } from 'next/navigation';
export default async function MainLayout({ children }) {
    // const session = await getServerSession(authOptions);
    // console.log('SESSION: ', session)
    const router = useRouter()
    useEffect(() => {
        router.push('/home') 
 
    },[])
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
