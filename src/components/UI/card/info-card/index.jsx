import cls from './infoCard.module.scss'

export default function InfoCard({ img, text }) {
    return (
        <div className={cls.InfoCard}>
            {/* <img src={img} alt="img" /> */}
            {img}
            <p className={cls.InfoCard__text}>{text}</p>
        </div>
    )
}
