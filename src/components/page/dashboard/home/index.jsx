'use client'
import SprintCard from '@/components/UI/card/sprint-card'
import { useRouter } from 'next/navigation'
import cls from './home.module.scss'

const DataARr = [
  {
    id: 1,
    title: "1.1 Welcome abroad - how to use the UzIT platform?",
    progres: 10,
    time: "5:42",
    exercises:0,
  },
  {
    id: 2,
    title: "1.1 Welcome abroad - how to use the UzIT platform?",
    progres: 100,
    time: "5:42",
    exercises:0,
  },
  {
    id: 3,
    title: "1.1 Welcome abroad - how to use the UzIT platform?",
    progres: 90,
    time: "5:42",
    exercises:0,
  }
]
export default function DashboardHomePage() {
  const router = useRouter()
  return (
      <div className={cls.DashboardHomePage}>
        {/* <VimeoPlayer/> */}
        <SprintCard
          lectures={"12 lectures"}
          min={"160 min"}
          exercises={"24 exercises"}
          title={"Sprint 1- Intro to Java"}
        isActive={true} dataArr={DataARr} 
        onClick={()=>router.push(`/dashboard/lesson/${1}/vidoe`)}
          
          />
      <SprintCard
          lectures={"12 lectures"}
          min={"160 min"}
          exercises={"24 exercises"}
          title={"Sprint 1- Intro to Java"}
        dataArr={DataARr} 
        onClick={()=>router.push(`/dashboard/lesson/${1}/vidoe`)}
          
        />
         <SprintCard
          lectures={"12 lectures"}
          min={"160 min"}
          exercises={"24 exercises"}
          title={"Sprint 1- Intro to Java"}
        dataArr={DataARr} 
        onClick={()=>router.push(`/dashboard/lesson/${1}/vidoe`)}
          
        />
            <SprintCard
          lectures={"12 lectures"}
          min={"160 min"}
          exercises={"24 exercises"}
          title={"Sprint 1- Intro to Java"}
        dataArr={DataARr} 
        onClick={()=>router.push(`/dashboard/lesson/${1}/vidoe`)}
          
        />
            <SprintCard
          lectures={"12 lectures"}
          min={"160 min"}
          exercises={"24 exercises"}
          title={"Sprint 1- Intro to Java"}
        dataArr={DataARr} 
        onClick={()=>router.push(`/dashboard/lesson/${1}/vidoe`)}
          
          />
      </div>
      
  
  )
}
