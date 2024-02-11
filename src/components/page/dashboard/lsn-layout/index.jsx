'use client'
import DashboardHeader from '@/components/UI/dashboard-header'
import Image from 'next/image'
import {useState} from "react"
import { useParams } from 'next/navigation'
import cls from './lesson.module.scss'
import LessonMadal from '@/components/UI/madal/lesson-madal'

const lessonArr = [
  {
    id: 1,
    title: "Sprint 1 · Intro to Java",
    data: [
      {
        id: 1,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 2,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 3,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      }
    ]
  },
  {
    id: 2,
    title: "Sprint 1 · Intro to Java",
    data: [
      {
        id: 1,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 2,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 3,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      }
    ]
  }
  , {
    id: 3,
    title: "Sprint 1 · Intro to Java",
    data: [
      {
        id: 1,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 2,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      },
      {
        id: 3,
        title: "S1 · L1",
        text:"Welcome abroad - how to use the UzIT platform?"
      }
    ]
  }
]

export default function LassonLoayout({data, children }) {
  const {id} = useParams()
  const [openMadl, setOpenMal] = useState(false)
  return (
    <div className={cls.LassonLoayout}>
      <div className={cls.LassonLoayout__content}>
        <DashboardHeader
          OpenMadal={()=> setOpenMal(true)}
          sprintId={id}
          currentLesson={`Sprint 1 · Lesson 1`}
        />
      {children}
      </div>
      <div className={cls.LassonLoayout__right}>
        <div className={cls.LassonLoayout__right__head}>
          <button className={cls.LassonLoayout__right__btn}>Java</button>
        </div>
        <div className={cls.LassonLoayout__right__img}>
        <Image
          src={'/Home/code.png'} 
          layout='fill'
          objectFit='cover'
          alt={"img"}
          />
        </div>
      </div>

      {
        openMadl ? <LessonMadal lessonArr={data} close={()=>setOpenMal(false)}/>:""
      }
    </div>
  )
}
