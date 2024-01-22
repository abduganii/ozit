import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import React from 'react'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
