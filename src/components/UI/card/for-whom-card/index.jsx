import cls from './forWhomCard.module.scss'

export default function ForWhomCard({ title, text, img, ...other }) {
    return (
        <div className={`${cls.ForWhomCard}`} style={{ backgroundImage: `url:(${img})` }} {...other}>
            <h3 className={cls.ForWhomCard__title}>{title}</h3>
            <p className={cls.ForWhomCard__text}>{text}</p>

        </div>
    )
}
