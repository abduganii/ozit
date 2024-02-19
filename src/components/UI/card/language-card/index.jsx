import { ZIcons } from '../../icon'
import cls from './language.module.scss'

export default function LanguageCard({ className, title, description, ...other }) {
    return (
        <div className={`${cls.LanguageCard} ${className && className}`}{...other}>
            <div className={cls.LanguageCard__project}>
                <p className={cls.LanguageCard__project__text}>7 topics・1 project・1 week</p>
                <div>
                    <ZIcons />
                    <p className={cls.LanguageCard__project__Free}>Free</p>
                </div>
            </div>
            <h3 className={cls.LanguageCard__title}>{ title }</h3>
            <p className={cls.LanguageCard__text}>{description }</p>
            <div className={cls.LanguageCard__skill}>
                <p className={cls.LanguageCard__skill__text}>Layout</p>
                <p className={cls.LanguageCard__skill__text}>Layout</p>
            </div>
        </div>
    )
}
