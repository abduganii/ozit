import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'


export default function LassonText() {
  return (
    <div className={cls.LassonPage}>
      
      <div className={cls.LassonPage__wrap}>
      <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java programLesson 1:"}
          
        />
     </div>
        
   
    </div>
  )
}
