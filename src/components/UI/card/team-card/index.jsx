import { LinkadenIcons } from '../../icon'
import cls from './team.module.scss'

export default function TeamCard({name,position,likiden,bagImage}) {
  return (
      <div className={cls.TeamCard} style={{background:`url(${bagImage})`}}>
          <div>
            <h4 className={cls.TeamCard__name}>{name}</h4>
            <p className={cls.TeamCard__position}>{position}</p>
          </div>
          
          <LinkadenIcons/>
    </div>
  )
}
