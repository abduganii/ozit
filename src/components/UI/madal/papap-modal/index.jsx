import { DeleteIcons } from '../../icon'
import cls from './papapMadul.module.scss'

export default function PaPap({title,color,text,icons,cancel,submit,btnText,close}) {
  return (
    <div className={cls.PaPap}>
    
      <div className={cls.PaPap__content}>
      <div className={cls.PaPap__close} onClick={close}><DeleteIcons color={"black"} /></div>
          <div className={cls.PaPap__content__icons} style={{backgroundColor:color}}>
            {icons}
          </div>
          <h3 className={cls.PaPap__title}>{ title}</h3>
        <p className={cls.PaPap__text}>{text}</p>
        <div className={cls.PaPap__btn}>
        <button onClick={close}>Cancel</button>
        <button>{btnText} </button>
        </div>
          </div>
        <div className={cls.PaPap__back} onClick={close}></div>
    </div>
  )
}
