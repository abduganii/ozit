'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalBtn from '../button/global-btn'
import Container from '../container'
import SiteBar from '../site-bar'
import cls from './header.module.scss'
import {signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const params = usePathname()
    return (
        <header className={`${cls.Header} ${params.includes('/about-us')? cls.Header__transparent :""}`}>
            <Container className={cls.Header__container}>
                <Link className={cls.Header__logo} href={'/'}>UZIT </Link>
                <SiteBar />

                <div className={cls.Header__btn}>
                    <GlobalBtn onClick={() => signIn()} className={cls.Header__btn__login}>Log in Wih Google </GlobalBtn>
                    <GlobalBtn onClick={() => signIn('github', {
                        callbackUrl: 'http://localhost:3000'
                    })} className={cls.Header__btn__login}>Log in Wih Git </GlobalBtn>
                    <GlobalBtn onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} className={cls.Header__btn__login}>Sign out Git </GlobalBtn>
                    {/*<GlobalBtn className={cls.Header__btn__sign}>Sign up</GlobalBtn>*/}
                    {/*<GlobalBtn className={cls.Header__btn__login}>En</GlobalBtn>*/}
                </div>
            </Container>

        </header>
    )
}
