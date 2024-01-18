import BlueBtn from '@/components/UI/button/blue-btn'
import cls from './hero.module.scss'

export default function Hero() {
    return (
        <div className={cls.Hero}>
            <button className={cls.Hero__btn}> &lt;Курс&gt;</button>
            <h2 className={cls.Hero__title}>Курс «Java-разработчик»</h2>
            <p className={cls.Hero__text}>Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство</p>
            <BlueBtn className={cls.Hero__btn1}>Начать учиться бесплатно</BlueBtn>
            <div className={cls.Hero__member}>
                <div className={cls.Hero__member__div}></div>
                <p className={cls.Hero__member__text}>+250 Человек
                    уже прошли обучение</p>
            </div>
        </div>
    )
}
