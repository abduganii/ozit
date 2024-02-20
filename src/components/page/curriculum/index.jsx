import MoreBtn from '@/components/UI/button/more-btn'
import LanguageCard from '@/components/UI/card/language-card'
import Container from '@/components/UI/container'
import cls from './curriculum.module.scss'
import Hero from './hero'

export default function CurriculumPage(props) {
    const { data } = props
    return (
        <div className={cls.CurriculumPage}>
            <Hero />
            <Container>
                <div className={cls.CurriculumPage__flex}>
                    {
                       data.course_sprints.map(e => {
                           return <LanguageCard
                               className={cls.CurriculumPage__card}
                               key={e.id}
                               title={e.title}
                               description={e.description}
                           />
                       })
                    }
                 
                </div>
                <MoreBtn style={{ margin: "108px auto 136px auto " }} />
            </Container>
        </div>
    )
}
