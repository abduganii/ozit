import BlueBtn from '../button/blue-btn'
import { EmailIcons } from '../icon'
import cls from './homeSing.module.scss'

export default function HomeSing() {
    return (
        <div className={cls.HomeSing}>
            <div className={cls.HomeSing__email}><EmailIcons /></div>
            <h3 className={cls.HomeSing__title}>Sign up for
                free lessons</h3>
            <label className={cls.HomeSing__label}>
                <input type="email" placeholder='email' />
                <BlueBtn className={cls.HomeSing__label__btn}>Sign in</BlueBtn>
            </label>
        </div>
    )
}
