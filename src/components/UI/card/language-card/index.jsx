import { ZIcons } from '../../icon'
import cls from './language.module.scss'

export default function LanguageCard({ className, ...other }) {
    return (
        <div className={`${cls.LanguageCard} ${className && className}`}{...other}>
            <div className={cls.LanguageCard__project}>
                <p className={cls.LanguageCard__project__text}>7 topics・1 project・1 week</p>
                <div>
                    <ZIcons />
                    <p className={cls.LanguageCard__project__Free}>Free</p>
                </div>
            </div>
            <h3 className={cls.LanguageCard__title}>HTML, CSS, JavaScript: free module</h3>
            <p className={cls.LanguageCard__text}>Feel yourself in the role of a developer and understand whether you want to develop in this direction. Learn basic HTML and CSS syntax. Learn how to place blocks on a web page, change fonts and colors.</p>
            <div className={cls.LanguageCard__skill}>
                <p className={cls.LanguageCard__skill__text}>Layout</p>
                <p className={cls.LanguageCard__skill__text}>Layout</p>
            </div>
        </div>
    )
}
