import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'


export default function LassonText({data}) {
  return (
    <div className={cls.LassonPage}>
    
      <div className={cls.LassonPage__wrap}>
      <LessonTextCard  title={`${data?.course_sprint}.${data?.step} ${data?.title}`}
          text={`Lesson 1: ${data?.description}`}
        />
     </div>
        
   
    </div>
  )
}
