'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import GlobalBtn from '../button/global-btn'
import Container from '../container'
import SiteBar from '../site-bar'
import cls from './header.module.scss'
// import {signIn, signOut, useSession } from "next-auth/react";
import { DowndIcons } from '../icon'
import { useEffect, useState } from 'react'


export default function Header(props) {
    // const { session } = props
    const params = usePathname()
    const router = useRouter()

    
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const getWindowHeight = () => {
    setWindowHeight(typeof window !== "undefined" ? window.scrollY : 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", getWindowHeight);
      return () => window.removeEventListener("scroll", getWindowHeight);
    }
  }, []);
    
    
    return (
        <header className={`${cls.Header} ${params.includes('/about-us') && windowHeight< 810 ? cls.Header__transparent :""} ${windowHeight>0?cls.Header__shodow:""}`}>
            <Container className={cls.Header__container}>
                <Link className={cls.Header__logo} href={'/home'}>UZIT </Link>
                <SiteBar windowHeight={windowHeight} />

                <div className={cls.Header__btn}>
                    <GlobalBtn className={cls.Header__btn__login} onClick={()=>router.push('/auth/login')}>Log in</GlobalBtn>
                    {/*{ session ?*/}
                    {/*    <GlobalBtn onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} className={cls.Header__btn__login}>Log out({session.user.name})</GlobalBtn> :*/}
                    {/*    <GlobalBtn onClick={() => signIn()} className={cls.Header__btn__login}>Git/Google</GlobalBtn>*/}
                    {/*}*/}
                    {/*<GlobalBtn onClick={() => signIn()} className={cls.Header__btn__login}>Git/Google</GlobalBtn>*/}
                    <GlobalBtn className={cls.Header__btn__sign} onClick={()=>router.push('/auth/login')}>Sign up</GlobalBtn>
                    <GlobalBtn className={cls.Header__btn__login}>En <DowndIcons/></GlobalBtn>
                </div>
            </Container>

        </header>
    )
}
