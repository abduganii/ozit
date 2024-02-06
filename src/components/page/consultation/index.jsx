
import GlobalBtn from '@/components/UI/button/global-btn'
import Calentar from '@/components/UI/calentar'
import Container from '@/components/UI/container'
import cls from './consultation.module.scss'

export default function ConsultationPage() {
    return (
        <div className={cls.CurriculumPage}>
            <div className={cls.CurriculumPage__hero}>
                <Container>
                <h3>Schedule your free career consultation in 3 easy steps</h3>
                <GlobalBtn className={cls.CurriculumPage__hero__btn}>Schedule now</GlobalBtn>
                </Container>
            </div>
            <Container style={{margin:"136px auto"}}>
                <Calentar/>
           </Container>
        </div>  
    )
}
