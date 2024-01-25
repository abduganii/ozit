import Image from 'next/image'
import cls from './forWhomCard.module.scss'

export default function LoarnCard({ title, text, backImage,img, ...other }) {
    return (
        <div className={`${cls.ForWhomCard} `} style={{backgroundImage: `url('${backImage}')`}} {...other}>
            <h3 className={cls.ForWhomCard__title}>{title}</h3>
            <p className={cls.ForWhomCard__text}>{text}</p>
            <div>
                <Image width={429} height={276} src={img} alt="img" />
            </div>
        </div>
    )
}
