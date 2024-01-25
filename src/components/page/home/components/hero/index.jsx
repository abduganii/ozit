import BlueBtn from '@/components/UI/button/blue-btn'
import Image from 'next/image'
import cls from './hero.module.scss'

export default function Hero() {
    return (
        <div className={cls.Hero}>
            <button className={cls.Hero__btn}> {`<Course>`}</button>
            <h2 className={cls.Hero__title}>Курс «Java-разработчик»</h2>
            <p className={cls.Hero__text}>Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство</p>
            <BlueBtn className={cls.Hero__btn1}>Начать учиться бесплатно</BlueBtn>
            <div className={cls.Hero__member}>
                <div className={cls.Hero__member__div}>
                    <Image
                        width={40}
                        height={40}
                        src={'/image/Ellipse11.png'}
                        style={{transform:`translateX(${40}px)`,zIndex:10}}
                        alt="img"
                    />
                     <Image
                        width={40}
                        height={40}
                        style={{transform:`translateX(${20}px)`,zIndex:9}}
                        src={'/image/Ellipse11.png'}
                        alt="img"
                    />
                     <Image
                        width={40}
                        height={40}
                      
                        src={'/image/Ellipse11.png'}
                        alt="img"
                    />
                    
                </div>
                <p className={cls.Hero__member__text}>+250 Человек
                    уже прошли обучение</p>
            </div>
        </div>
    )
}
