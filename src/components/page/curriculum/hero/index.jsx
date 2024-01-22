import BlueBtn from '@/components/UI/button/blue-btn'
import { DocIcons } from '@/components/UI/icon'
import cls from './hero.module.scss'

export default function Hero() {
    return (
        <div className={cls.Hero}>
            <button className={cls.Hero__btn}> {`программа`}</button>
            <h2 className={cls.Hero__title}>Курс «Java-разработчик»</h2>
            <BlueBtn className={cls.Hero__btn1}><DocIcons color={"#081226"} /> Начать учиться бесплатно</BlueBtn>
        </div>
    )
}
