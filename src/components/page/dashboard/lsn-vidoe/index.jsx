import LessonTextCard from '@/components/UI/card/lesson-text'
import VimeoPlayer from '@/components/UI/vimeo'
import cls from './lessons.module.scss'


export default function LassonPage({ data }) {
  
  return (
    <div className={cls.LassonPage}>
      <div className={cls.LassonPage__vidoe}>
      <VimeoPlayer  videoId={data?.vimeo_video_id}/>
      </div>
      
      <div className={cls.LassonPage__content}>
        <LessonTextCard
          title={`${data?.course_sprint}.${data?.step} ${data?.title}`}
          text={`Lesson 1: ${data?.description}`}
          border={true}
        />
          {/* <LessonTextCard title={"1.2 Class Structure"}
          text={"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics:Basic syntax and structure of a Java class Writing and running your first Java program"} 
        />*/}
      </div>
    </div>
  )
}
