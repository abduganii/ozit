import LessonTextCard from '@/components/UI/card/lesson-text'
import VimeoPlayer from '@/components/UI/vimeo'
import cls from './lessons.module.scss'


export default function LassonPage() {
  return (
    <div className={cls.LassonPage}>
      <VimeoPlayer />
      
      <div className={cls.LassonPage__content}>
        <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java program"}
          border={true}
        />
          <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java program"}
          
        />
      </div>
    </div>
  )
}
