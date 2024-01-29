import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
export default async function MainLayout({ children }) {
    const session = await getServerSession(authOptions);
    console.log('SESSION: ', session)
    return (
        <>
            <Header session={session}/>
            {children}
            <Footer />
        </>
    )
}
