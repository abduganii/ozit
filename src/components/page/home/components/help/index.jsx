import BlueBtn from '@/components/UI/button/blue-btn'
import Image from 'next/image'
import cls from './help.module.scss'

export default function Help() {
    return (
        <div className={cls.Help}>
            <div className={cls.Help__img}>
                <Image
                    src={'/image/Frame1.png'}
                    width={564}
                    height={550}
                    alt={"img"}
                />
            </div>
            <div className={cls.Help__content}>
                <h3>Поможем найти
                    профессию по душе
                </h3>
                <p> Вас ждут практические задания, которые максимально приближены к тому, чем занимаются современные frontend-разработчики</p>
                <BlueBtn white={true}>Записаться</BlueBtn>
            </div>
        </div>
    )
}
