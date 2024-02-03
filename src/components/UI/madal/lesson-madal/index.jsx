'use client'
import { useState } from 'react'
import SprntBalcCard from '../../card/sprint-balck-card'
import { DeleteIcons, DownBlackIcons, DownIcons } from '../../icon'
import cls from './lessonMadal.module.scss'

export default function LessonMadal({ lessonArr, close }) {
  const [CurrentId,setCurrentId] = useState(false)
  return (
    <div className={cls.LessonMadal}>
        <div className={cls.LessonMadal__content}>
            <div className={cls.LessonMadal__top}>
                  <div className={cls.LessonMadal__top__left}>
                      <p>Sprint 1 · Lesson 1</p>
                      <div><DownBlackIcons/></div>
                  </div>
                  <div className={cls.LessonMadal__top__delete}  onClick={close}><DeleteIcons color={"white"}/></div>
            </div> 

              {lessonArr?.length &&  <div className={cls.LessonMadal__lesson}>
                  {lessonArr?.map(e => (
                      <SprntBalcCard
                        key={e?.id}
                        title={e?.title}
                        dataArr={e?.data}
                        isCurrent={e?.id == CurrentId ? true : false}
                        openMadal={()=>setCurrentId(state => state ==e?.id ? false: e?.id )}
                      />
                ))}
              </div>}
        </div>
        <div className={cls.LessonMadal__back} onClick={close}></div>
    </div>
  )
}
