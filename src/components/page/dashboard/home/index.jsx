'use client'
import SprintCard from '@/components/UI/card/sprint-card'
import cls from './home.module.scss'

const DataARr = [
    {
        id: 1,
        title: "1.1 Welcome abroad - how to use the UzIT platform?",
        progres: 10,
        time: "5:42",
        exercises: 0,
    },
    {
        id: 2,
        title: "1.1 Welcome abroad - how to use the UzIT platform?",
        progres: 100,
        time: "5:42",
        exercises: 0,
    },
    {
        id: 3,
        title: "1.1 Welcome abroad - how to use the UzIT platform?",
        progres: 90,
        time: "5:42",
        exercises: 0,
    }
]
export default function DashboardHomePage({data}) {
    
    return (
        <div className={cls.DashboardHomePage}>
            {/* <VimeoPlayer/> */}
            {data?.course_sprints?.length && data?.course_sprints?.map(e => (
                <SprintCard
                key={e?.id}
                lectures={"12 lectures"}
                min={"160 min"}
                exercises={"24 exercises"}
                title={e?.title}
                step={e?.step}
                dataArr={e?.sprint_lessons}
            />
            ))}
          
           
        </div>
    )
}


