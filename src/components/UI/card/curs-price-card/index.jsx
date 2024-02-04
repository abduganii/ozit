import cls from './cursprice.module.scss'
import BlueBtn from '../../button/blue-btn'
import { DoneRoundIcons } from '../../icon'

export default function CursPriceCard({ lesson, price, text, arr,btnColor, background }) {
    return (
        <div className={cls.CursPriceCard} style={{background:background}}>
            <p className={cls.CursPriceCard__lesson}>{lesson}</p>
            <h3 className={cls.CursPriceCard__title}>{price}</h3>
            <p className={cls.CursPriceCard__text}>{text}</p>

            {arr && arr?.map(e => (
                <div className={cls.CursPriceCard__div} key={e?.id}><DoneRoundIcons /> <p>{e?.title}</p> </div>
            ))}
            <BlueBtn  className={`${cls.CursPriceCard__btn } ${btnColor && cls.CursPriceCard__btn__white}`}>Subscribe</BlueBtn>
        </div>
    )
}
