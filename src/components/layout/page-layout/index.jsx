'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
export default function PageLayout(props) {
    const router = useRouter()
    const pathName = usePathname()
    
    useEffect(() => {
        if (pathName == "/") {
            if (props.token) {
                router.push('/dashboard/home')
            } else {
                router.push('/home')
            }
        }
    },
    [pathName]
    )
    return (
        <>
        
            {props?.children}
        </>
    )
}
