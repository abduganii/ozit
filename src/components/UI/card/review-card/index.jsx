import { Rate } from 'antd'
import cls from './reviewCard.module.scss'

export default function ReviewCard({ rate, text, name, img, position }) {
    return (
        <div className={cls.ReviewCard}>
            <div>
                <Rate allowHalf defaultValue={2.5} />
                <p className={cls.ReviewCard__text}>{text}</p>
            </div>
            <div className={cls.ReviewCard__person}>
                <img src={img} alt="img" />
                <div>
                    <h4>{name}</h4>
                    <p > {position}</p>
                </div>
            </div>
        </div>
    )
}
