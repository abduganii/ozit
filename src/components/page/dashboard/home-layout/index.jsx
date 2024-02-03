import DoneSprintCard from "@/components/UI/card/donesprint-card"
import LessonCard from "@/components/UI/card/lesson-card"
import { DownIcons } from "@/components/UI/icon"
import VimeoPlayer from "@/components/UI/vimeo"
import cls from "./home.module.scss"

const ExercisesArr = [
    {
        id: 1,
        text: "Do the first exercise",
        isChecked: true,
    },
    {
        id: 2,
        text: "Do the first exercise",
        isChecked: false,
    },
    {
        id: 3,
        text: "Do the first exercise",
        isChecked: false,
    }
]
export default function DoashborHomelayout({ children }) {
    return (
      <div className={cls.DoashborHomelayout}>
        {children}
        <div className={cls.DoashborHomelayout__left}>
            <div className={cls.DoashborHomelayout__left__vidoe}>
                <div className={cls.DoashborHomelayout__left__top}>
                    <h3>Continue where you left off</h3> 
                    <div><DownIcons/></div>
                </div> 
                <VimeoPlayer/>    
            </div>    
                <DoneSprintCard sprintCount={"Sprint 1"} Completed={"25:15h"} viwes={"16/20"} youtobe={"16/20"} />
                
                <LessonCard
                    lasson={"Lesson 1 · 42 min"}
                    title={"HTML, CSS, JavaScript: free module"}
                    completed={"2/8 completed"}
                    style={{ marginTop: "16px" }} 
                    ExercisesArr={ExercisesArr}

                />
        </div>    
      </div>
    )
  }