import LessonTextCard from '@/components/UI/card/lesson-text'

import cls from './lessons.module.scss'


export default function LassonExercises() {
  return (
    <div className={cls.LassonPage}>
      
      <div className={cls.LassonPage__wrap}>
      <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java programLesson 1:"}
          level={"easy"}
          levelColor={"#13B42C"}
          required={true}
          border={true}
        />
          <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java programLesson 1:"}
          level={"easy"}
          levelColor={"#FAB609"}
          required={true}
          border={true}
        />
          <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java programLesson 1:"}
          level={"easy"}
          levelColor={"#FAB609"}
          required={true}
          border={true}
        />
          <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java programLesson 1:"}
          level={"easy"}
          levelColor={"#F62E2E"}
          required={true}
         
        />
     </div>
        
   
    </div>
  )
}
