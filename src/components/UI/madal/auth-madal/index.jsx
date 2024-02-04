import { DeleteIcons } from '../../icon'
import cls from './papapMadul.module.scss'

export default function AuthMadala({close,children}) {
  return (
    <div className={cls.PaPap}>
    
    <div className={cls.PaPap__content}>
        <div className={cls.PaPap__close} onClick={close}><DeleteIcons color={"black"}/></div>
    {children}
    </div>
    <div className={cls.PaPap__back} onClick={close}></div>
  </div>
  )
}
