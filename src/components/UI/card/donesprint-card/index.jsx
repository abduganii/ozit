import { DocsExpIcons, ViewedIcons } from '../../icon'
import cls from './donesprint.module.scss'

export default function DoneSprintCard({sprintCount,Completed,viwes,youtobe}) {
  return (
    <div className={cls.DoneSprintCard}>
          <div className={cls.DoneSprintCard__top}>
              <p className={cls.DoneSprintCard__top__text}>{sprintCount}</p>
                <div className={cls.DoneSprintCard__top__left}>
                    <div className={cls.DoneSprintCard__top__btn}>
                        <ViewedIcons color={"#2454FF"} /> {viwes}
                    </div>
                    <div className={cls.DoneSprintCard__top__btn}>
                        <DocsExpIcons color={"#FF6C4B"} />{ youtobe}
                    </div>
              </div>
            </div>
            <h3 className={cls.DoneSprintCard__title}>{ Completed} <span>Completed</span></h3>
    </div>
  )
}
