import BlogsCard from '@/components/UI/card/blogs-card'
import Container from '@/components/UI/container'
import cls from './blogs.module.scss'

export default function BlogsPage() {
    return (
        <div className={cls.BlogsPage}>
            <div className={cls.BlogsPage__hero}>
                <h3 className={cls.BlogsPage__hero__title}>UzIT Blog</h3>
                <p>Learn to create and program modern web interfaces, start a career in IT, hone your skills</p>
            </div>

            <Container>
                <div className={cls.BlogsPage__flex}>
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                    <BlogsCard
                    id={22}
                        img={'image/frame2.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                        style={{marginBottom:"32px"}}
                    />
                </div>
            </Container>
        </div>
    )
}
