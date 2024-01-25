'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BlueBtn from '../button/blue-btn'
import Container from '../container'
import { InstaIcons, TelegramIcons, YoutobeIcons } from '../icon'
import cls from './footer.module.scss'

export default function Footer() {
    const params = usePathname()
   
    return (
        <footer className={cls.Footer}>
            {
                !params.includes('/blog/') ?  <div className={cls.Footer__top}>
                <h3 className={cls.Footer__top__title}>
                    Попробуйте любой формат курса бесплатно — выбрать один-единственный можно позже
                </h3>
                <BlueBtn className={cls.Footer__top__btn}>Начать учиться бесплатно</BlueBtn>
            </div>:"" 
            }
          

            <div className={cls.Footer__bottom}>
                <Container>
                    <div className={cls.Footer__bottom__nav}>
                        <h3 className={cls.Footer__bottom__logo}>UzIT</h3>
                        <ul className={cls.Footer__bottom__list}>
                            <li><Link href='/'>Программа курса</Link></li>
                            <li><Link href='/'>Премущества</Link></li>
                            <li><Link href='/'>Цены</Link></li>
                            <li><Link href='/'>FAQ</Link></li>
                            <li><Link href='/'>Связаться с нами</Link></li>

                        </ul>

                        <div className={cls.Footer__bottom__icons}>
                            <a href="/">
                                <TelegramIcons />
                            </a>
                            <a href="/">
                                <YoutobeIcons />
                            </a>
                            <a href="/">
                                <InstaIcons />
                            </a>
                        </div>
                    </div>

                    <div className={cls.Footer__bottom__content}>
                        <div className={cls.Footer__bottom__content__list}>
                            <p><Link href='/'>Terms of Service</Link> </p>
                            <p><Link href='/'>Terms of Service</Link> </p>
                            <p><Link href='/'>Cookie Policy</Link> </p>
                        </div>

                        <p>UzIT © 2023 All Rights Reserved</p>
                    </div>
                </Container>
            </div>
        </footer>

    )
}
