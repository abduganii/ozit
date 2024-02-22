'use client'
import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'
import { useSearchParams } from 'next/navigation'

export default function LassonExercises({ data }) {
  const searchParams = useSearchParams()

  return (
    <div className={cls.LassonPage}>
      
      <div className={cls.LassonPage__wrap}>
        {data && data?.map(e =>
          <LessonTextCard key={e?.id} title={`${searchParams.get("sprint")} ${searchParams.get("lesson")} ${e?.question}`}
          text={`Lesson ${searchParams.get("lesson")}: ${e?.hint}:`}
          level={"easy"}
          levelColor={"#13B42C"}
          required={true}
          border={true}
        />
      )
      }
         
     </div>
        
   
    </div>
  )
}
