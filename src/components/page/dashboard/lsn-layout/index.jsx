'use client'
import DashboardHeader from '@/components/UI/dashboard-header'
import Image from 'next/image'
import {useState} from "react"
import { useParams, usePathname ,useRouter} from 'next/navigation'
import cls from './lesson.module.scss'
import LessonMadal from '@/components/UI/madal/lesson-madal'
import { useSearchParams } from 'next/navigation'

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

export default function LassonLoayout({data, children}) {
  const {id,exercisesid} = useParams()
  const [openMadl, setOpenMal] = useState(false)
  const searchParams = useSearchParams()
  const usepathname = usePathname()
  const router = useRouter()
  // /dashboard/lesson/3/vidoe?sprint=2&lesson=1
  return (
    <div className={cls.LassonLoayout}>
      <div className={cls.LassonLoayout__content}>
       { !usepathname.includes("/dashboard/lesson/3/exercises/") ? <DashboardHeader
          OpenMadal={()=> setOpenMal(true)}
          sprintId={id}
          currentLesson={`Sprint ${searchParams.get("sprint")}  · Lesson ${searchParams.get("lesson")}`}
        /> : <div className={cls.LassonLoayout__pathName}>
            <span onClick={()=>router.push('/dashboard/home')}> Doshboard </span>
            <span  onClick={()=>router.push('/dashboard/home')} >/ Sprint {searchParams.get("sprint")} </span>
            <span
              onClick={() => router.push(`/dashboard/lesson/${id}/vidoe?sprint=${searchParams.get("sprint")}&lesson=${searchParams.get("lesson")}`)}>
              / Lesson {searchParams.get("lesson")}
            </span>
            <span>/ Exercises {Number(exercisesid) + 1 } </span> 
        </div>}
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
