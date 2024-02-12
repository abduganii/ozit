'use client'
import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
export default async function MainLayout({ children, session }) {
    const router = useRouter()
    useEffect(() => {
        router.push('/home')

    },[])
    return (
        <>
            <Header session={session}/>
            {children}
            <Footer />
        </>
    )
}
