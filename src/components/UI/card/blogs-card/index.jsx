import cls from './blogsCard.module.scss'

export default function BlogsCard({ img, title, date }) {
    return (
        <div className={cls.BlogsCard}>
            <img src={img} alt="img" />
            <h4 className={cls.BlogsCard__title}>{title}</h4>
            <p className={cls.BlogsCard__date}> {date}</p>
        </div>
    )
}
