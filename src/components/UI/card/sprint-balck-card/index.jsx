import Image from 'next/image'
import { DownBlackIcons } from '../../icon'
import cls from './sprintBalck.module.scss'

export default function SprntBalcCard({ title, isCurrent,sprint, openMadal, dataArr = [] }) {
  
  return (
    <div className={`${cls.SprntBalcCard} ${isCurrent && cls.SprntBalcCard__active}`}>
          <div className={cls.SprntBalcCard__top} onClick={openMadal}>
              <h3 className={cls.SprntBalcCard__title}>{title}</h3>
              <div className={cls.SprntBalcCard__top__left}>
                  {isCurrent && <div className={cls.SprntBalcCard__top__btn}>Current sprint</div>}
                  <div className={`${!isCurrent && cls.SprntBalcCard__top__iconsRote}`}>
                      <DownBlackIcons/>
                  </div>
            </div>
        </div>
        {dataArr?.length & isCurrent ? 
        <div>
          { dataArr?.map(e => (
            <div key={e?.id} className={cls.SprntBalcCard__list}>
              <Image 
                src={'/Home/3298 5.png'}
                width={180}
                height={121}
                alt={"img"}
              />
              <div className={cls.SprntBalcCard__list__left}>
                <p>S{sprint} L{e?.step }</p>
                <h3>{ e?.title}</h3>
              </div>
            </div>
          ))
          }
         </div>:""
        }

    </div>
  )
}
