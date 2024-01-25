import cls from './helpfing.module.scss'

export default function HelpToJobCard({ title, text, bgImage }) {
    return (
        <div className={cls.HelpToJobCard} style={{ backgroundImage: `url('${bgImage}')` }}>
            <h4 className={cls.HelpToJobCard__title}>{title}</h4>
            <p className={cls.HelpToJobCard__text}>{text}</p>
        </div>
    )
}
