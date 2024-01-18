import { IconsTest } from '@/components/UI/icon'
import Image from 'next/image'
import cls from './improve.module.scss'

export default function ImproveCareer() {
    return (
        <div className={cls.ImproceCareer}>
            <div className={cls.ImproceCareer__image}>
                <Image
                    src={'/image/Frame.png'}
                    width={556}
                    height={672}
                    alt={"img"}
                />
            </div>
            <div className={cls.ImproceCareer__content}>
                <h3 className={cls.ImproceCareer__title}>Улучшите свою карьеру с помощью нашей программы</h3>
                <div className={cls.ImproceCareer__list}>
                    <IconsTest />
                    <p className={cls.ImproceCareer__list__text}>Каждая видеолекция дает максимальный
                        эффект всего за 10-15 минут.</p>
                </div>
                <div className={cls.ImproceCareer__list}>
                    <IconsTest />
                    <p className={cls.ImproceCareer__list__text}>Ответьте на самые сложные вопросы на собеседовании и произведите впечатление
                        на ведущие компании </p>
                </div>
                <div className={cls.ImproceCareer__list}>
                    <IconsTest />
                    <p className={cls.ImproceCareer__list__text}>Наши инструкторы из Apple и Google будут сопровождать вас на протяжении всего пути,
                        облегчая сложные темы</p>
                </div>
                <div className={cls.ImproceCareer__list}>
                    <IconsTest />
                    <p className={cls.ImproceCareer__list__text}>Возьмите свой учебный путь под контроль
                        благодаря гибкому графику работы и учебы</p>
                </div>

                <div className={cls.ImproceCareer__card}>

                </div>
            </div>
        </div>
    )
}
