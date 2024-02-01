'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import GlobalBtn from '../button/global-btn'
import Container from '../container'
import SiteBar from '../site-bar'
import cls from './header.module.scss'
import {signIn, signOut, useSession } from "next-auth/react";
import { DowndIcons } from '../icon'


export default function Header(props) {
    const { session } = props
    const params = usePathname()
    const router = useRouter()
    return (
        <header className={`${cls.Header} ${params.includes('/about-us')? cls.Header__transparent :""}`}>
            <Container className={cls.Header__container}>
                <Link className={cls.Header__logo} href={'/'}>UZIT </Link>
                <SiteBar />

                <div className={cls.Header__btn}>
                    <GlobalBtn className={cls.Header__btn__login} onClick={()=>router.push('/auth/login')}>Log in</GlobalBtn>
                    {/* { session ?
                        <GlobalBtn onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} className={cls.Header__btn__login}>Log out({session.user.name})</GlobalBtn> :
                        <GlobalBtn onClick={() => signIn()} className={cls.Header__btn__login}>Git/Google</GlobalBtn>
                    } */}
                    <GlobalBtn className={cls.Header__btn__sign} onClick={()=>router.push('/auth/login')}>Sign up</GlobalBtn>
                    <GlobalBtn className={cls.Header__btn__login}>En <DowndIcons/></GlobalBtn>
                </div>
            </Container>

        </header>
    )
}
