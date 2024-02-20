import BlogsCard from '@/components/UI/card/blogs-card'
import Container from '@/components/UI/container'
import cls from './blogs.module.scss'

export default function BlogsPage({Blogs}) {
    return (
        <div className={cls.BlogsPage}>
            <div className={cls.BlogsPage__hero}>
                <h3 className={cls.BlogsPage__hero__title}>UzIT Blog</h3>
                <p>Learn to create and program modern web interfaces, start a career in IT, hone your skills</p>
            </div>

            <Container>
                <div className={cls.BlogsPage__flex}>
                {
                        Blogs && Blogs?.map(e => (
                            <BlogsCard
                                key={e?.id}
                                id={e?.id}
                                img={e?.image}
                                title={e?.title}
                                date={e?.created_at}
                            /> 
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
