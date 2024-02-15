'use client'
import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import React, { useEffect } from 'react'
export default  function MainLayout(props) {
    return (
        <>
            <Header session={props?.session}/>
            {props?.children}
            <Footer />
        </>
    )
}
