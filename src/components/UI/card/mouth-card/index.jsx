import cls from './moanth.module.scss'

export default function MounthCard({ className, mounth, text, background, ...other }) {
    return (
        <div className={`${cls.MounthCard} ${className && className}`} {...other}>
            <div className={cls.MounthCard__btn}>
                <div></div>
                <p>{mounth}</p>
            </div>
            <p>{text}</p>
        </div>
    )
}
