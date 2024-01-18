import Header from '@/components/UI/header'
import React from 'react'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            footer
        </>
    )
}
