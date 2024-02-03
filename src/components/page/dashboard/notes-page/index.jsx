import cls from './noted.module.scss'

const notedArr = [
  {
    id: 1,
    title: "Welcome abroad - how to use the UzIT platform?",
    date: "24 Dec",
    isRead: true,
    text:"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics: Basic syntax and structure of a Java class Writing and running your first Java program  read more"
  },
  {
    id: 2,
    title: "Welcome abroad - how to use the UzIT platform?",
    date: "24 Dec",
    isRead: false,
    text:"Lesson 1: Introduction to Java Programming In this lesson, you will be introduced to the basics of the Java programming language and the development environment. We will cover the following topics: Basic syntax and structure of a Java class Writing and running your first Java program  r"
  }
]

export default function NotesPage() {
  return (
    <div className={cls.NotesPage}>
      <h3 className={cls.NotesPage__title}>Notes</h3>
      <p className={cls.NotesPage__text}>Notes, added by administrators during the course</p>

      {notedArr && notedArr?.map(e => (
        <div className={cls.NotesPage__list} key={e?.id}>
          <div className={cls.NotesPage__list__top}>
            <h3 >{ e?.title}</h3>
            <span>{e?.date}</span>
            {e?.isRead && <div></div>}
          </div>
          <p className={cls.NotesPage__list__text}>{ e?.text}  <span>learn more</span></p>
        </div>
      ))}
    </div>
  )
}
