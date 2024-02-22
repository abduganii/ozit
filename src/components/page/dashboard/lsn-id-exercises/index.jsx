'use client'
import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'
import { useSearchParams } from 'next/navigation'
import GlobalMadal from '@/components/UI/madal/global-madal'
import { useState } from 'react'

export default function LassonExercisesBuId({ data,index }) {
  const searchParams = useSearchParams()
  const [open ,setOpen] = useState(false)
  return (
    <div className={cls.LassonPage}>
      <div className={cls.LassonPage__wrap}>
        <LessonTextCard key={data?.[index]?.id} title={`${searchParams.get("sprint")} ${searchParams.get("lesson")} ${data?.[index]?.question}`}
          text={`Lesson ${searchParams.get("lesson")}: ${data?.[index]?.hint}:`}
          level={"easy"}
          levelColor={"#13B42C"}
          required={true}
          border={true}
        />
      <div className={cls.LassonPage__hint} onClick={()=>setOpen(!open)}>Hint</div>
      </div>
      {open ? <GlobalMadal close={()=>setOpen(false)}>
        <h3>{searchParams.get("sprint")}.{searchParams.get("lesson")} {data?.[index]?.question}</h3>
        <p>{ data?.[index]?.hint}</p>
       </GlobalMadal>:""}
    </div>
  )
}
