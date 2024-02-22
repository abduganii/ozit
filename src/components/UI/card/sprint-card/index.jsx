'use client'
import {useState} from "react"
import cls from './sprint.module.scss'
import {Collapse} from 'react-collapse';
import {UnmountClosed} from 'react-collapse';
import { DownIcons,ViewedIcons ,DocsExpIcons} from '../../icon'
import { Progress } from 'antd';
import { useRouter } from "next/navigation";

const data=  {
    id: 3,
    title: "1.1 Welcome abroad - how to use the UzIT platform?",
    progres: 90,
    time: "5:42",
    exercises: 0,
}
export default function SprintCard({
    title,
    isActive,
    dataArr = [],
    lectures,
    min,
    onClick,
    step,
    exercises,
    ...other
}) {
    const [open, setOpen] = useState(isActive)
    const router = useRouter()
    
  return (
    <div className={cls.SprintCard}>
        <div className={cls.SprintCard__top}>
            <h3 className={cls.SprintCard__top__title} onClick={()=>setOpen(!open)} >{title}</h3>
            <div className={cls.SprintCard__top__btn}>
            {open && <div className={cls.SprintCard__top__btnActie} >Current sprint</div>}
                <div className={`${cls.SprintCard__top__down} ${open && cls.SprintCard__top__reverse}`} onClick={()=>setOpen(!open)}><DownIcons/></div>
            </div>
          </div>
          <Collapse isOpened={open}>
              {dataArr && dataArr?.map(e => (
                  <div className={cls.SprintCard__exercises} key={e?.id}>
                      <div className={cls.SprintCard__exercises__flex}>
                          {
                              e?.duration && e?.duration < 100 &&  <Progress
                                  type="circle"
                                  trailColor="#e6f4ff"
                                  percent={e?.duration}
                                  strokeWidth={14}
                                  size={24}
                                  format={() => null}
                              />
                          }
                          {
                              e?.duration && e?.duration == 100 &&  <Progress
                                  type="circle"
                                  trailColor="#e6f4ff"
                                  percent={e?.duration}
                                  strokeWidth={14}
                                  size={24}
                                  format={() => null}
                              />
                          }
                          <p
                              className={cls.SprintCard__exercises__title}
                              onClick={() => {
                                router.push(`/dashboard/lesson/${e?.id}/vidoe?sprint=${step}&lesson=${e?.step}`)
                                
                              }}>{step}.{e?.step}  {e?.title}</p>
                      </div>
                      <div className={cls.SprintCard__exercises__flex1}>
                          <div className={cls.SprintCard__exercises__btn}>
                              <ViewedIcons color={"#081226"} /> { e?.time}
                          </div>
                          <div className={cls.SprintCard__exercises__btn}>
                              <DocsExpIcons  color={"#081226"} />{ e?.exercises}
                          </div>

                      </div>
                  </div>
              ))}
          </Collapse>

          <div className={cls.SprintCard__exercises__flex1} style={{marginTop:"16px"}}>
                <div className={cls.SprintCard__exercises__btn}>
                    { lectures}
                </div>
                <div className={cls.SprintCard__exercises__btn}>
                    { min}
                </div>
              <div className={cls.SprintCard__exercises__btn}>
                    { exercises}
                </div>

        </div>
    </div>
  )
}

