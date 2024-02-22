'use client'
import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LassonExercises({ data,id }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <div className={cls.LassonPage}>
      <div className={cls.LassonPage__wrap}>
        {data && data?.map((e,i) =>
          <LessonTextCard key={e?.id} title={`${searchParams.get("sprint")} ${searchParams.get("lesson")} ${e?.question}`}
          text={`Lesson ${searchParams.get("lesson")}: ${e?.hint}:`}
          level={"easy"}
          onClick={()=>router.push(`/dashboard/lesson/${id}/exercises/${i}?sprint=${searchParams.get("sprint")}&lesson=${searchParams.get("lesson")}`)}
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
