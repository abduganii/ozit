'use client'
import BlueBtn from '@/components/UI/button/blue-btn'
import MoreBtn from '@/components/UI/button/more-btn'
import LanguageCard from '@/components/UI/card/language-card'
import HomeSing from '@/components/UI/home-sing'
import { DocIcons } from '@/components/UI/icon'
import { useRouter } from 'next/navigation'
import cls from './peogram.module.scss'

export default function ProgramSection({ data }) {
    const router = useRouter()
    return (
        <div className={cls.ProgramSection}>
            <div className={cls.ProgramSection__left}>
                <div className={cls.ProgramSection__left__dote}>
                    <div></div>
                    <p>Curriculum</p>
                </div>
                <h3 className={cls.ProgramSection__left__title}>{`Full <program> of the course`}</h3>
                <p className={cls.ProgramSection__left__text}>Put together a program based on the 4C/ID educational model: you will only learn what you need to learn to solve specific practical frontend tasks</p>
                <HomeSing />
            </div>
            <div className={cls.ProgramSection__right}>
                <BlueBtn className={cls.ProgramSection__right__btn}><DocIcons color={"#2454FF"} />Download the program in PDF</BlueBtn>
                {
                       data.course_sprints.map(e => {
                           return <LanguageCard
                               className={cls.CurriculumPage__card}
                               key={e.id}
                               title={e.title}
                               style={{ marginBottom: "8px" }} 
                               description={e.description}
                           />
                       })
                    }
                
                <MoreBtn onClick={()=>router.push('/home/curriculum')} style={{ margin: "62px auto 0 auto " }} />
            </div>
        </div>
    )
}
