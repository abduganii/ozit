import MoreBtn from '@/components/UI/button/more-btn'
import LanguageCard from '@/components/UI/card/language-card'
import Container from '@/components/UI/container'
import cls from './curriculum.module.scss'
import Hero from './hero'

export default function CurriculumPage() {
    return (
        <div className={cls.CurriculumPage}>
            <Hero />
            <Container>
                <div className={cls.CurriculumPage__flex}>
                    <LanguageCard className={cls.CurriculumPage__card} />
                    <LanguageCard className={cls.CurriculumPage__card} />
                    <LanguageCard className={cls.CurriculumPage__card} />
                </div>
                <MoreBtn style={{ margin: "108px auto 136px auto " }} />
            </Container>
        </div>
    )
}
