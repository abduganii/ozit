'use client'
import Image from 'next/image'
import cls from './noted.module.scss'

const notedArr = [
  // {
  //   id: 1,
  //   title: "Welcome abroad - how to use the UzIT platform?",
  //   date: "24 Dec",
  //   isRead: true,
  //   text:"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics: Basic syntax and structure of a Java class Writing and running your first Java program  read more"
  // },
  // {
  //   id: 2,
  //   title: "Welcome abroad - how to use the UzIT platform?",
  //   date: "24 Dec",
  //   isRead: false,
  //   text:"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics: Basic syntax and structure of a Java class Writing and running your first Java program  r"
  // }
]

export default function NotesPage({ Notes }) {
  const dataFuncition = (date) => {
    const weeksDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let createAt = new Date(date);
    let Hours = createAt.getHours();
  
    let Minutes = createAt.getMinutes();
    return `${weeksDay[createAt.getDay()]} ${Hours}:${Minutes}`
    
 }

  return (
    <div className={cls.NotesPage}>
      <h3 className={cls.NotesPage__title}>Notes</h3>
      <p className={cls.NotesPage__text}>Notes, added by administrators during the course</p>

      {Notes.length ?  Notes?.map(e => (
        <div className={cls.NotesPage__list} key={e?.id}>
          <div className={cls.NotesPage__list__top}>
            <h3 >{ e?.title}</h3>
            <span> {dataFuncition(e?.created_at)} </span>
            {e?.isRead && <div></div>}
          </div>
          {e?.content ? <p dangerouslySetInnerHTML={{ __html: e.content }} /> : null}
        </div>
      )):
      <div className={cls.NotesPage__Bell}>
        <div>
        <Image
            src={'/Home/Bell.png'}
            width={256}
            height={256}
            alt="img"
          />
          <h3 >You don't have any notes yet</h3>
        </div>
      </div>
      }
    </div>
  )
}
