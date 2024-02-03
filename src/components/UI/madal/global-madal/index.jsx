import { DeleteIcons } from '@/components/UI/icon'
import cls from './editProfile.module.scss'

export default function GlobalMadal({className,close,title, children}) {
  return (
    <div className={cls.EdetProfile}>
          <div className={cls.EdetProfile__content}>
              <div className={cls.EdetProfile__content__top}>
              <div className={cls.EdetProfile__colse} onClick={close}><DeleteIcons color={"black"} /></div>  
          </div>
        <div className={`${cls.EdetProfile__wrap} ${className && className}`}>
         {title && <h3>{ title}</h3>}
          {children}
        </div>
        </div>
    </div>
  )
}
