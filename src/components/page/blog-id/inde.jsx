'use client'
import cls from './blogsid.module.scss'
 
import { useParams,useRouter } from 'next/navigation'
import Container from '@/components/UI/container'
import { BackIcons, FacebookIcons, IconsIcons, Telegram1Icons, TwiterIcons } from '@/components/UI/icon'
import Image from 'next/image'
import BlogsCard from '@/components/UI/card/blogs-card'
import SwiperWithScrollIcons from '@/components/UI/Swiper'
export default function SingleBlogsPage() {
    const params = useParams()
    const router = useRouter()
    console.log(params.id) //id for single get
    return (
        <div className={cls.SingleBlogsPage}>
            <Container className={cls.SingleBlogsPage__container}>
                <div className={cls.SingleBlogsPage__nav}>
                    Home / Blog <span>/ Article</span>
                </div>

                <div className={cls.SingleBlogsPage__icons}>
                    <div>
                    <IconsIcons/>
                    </div>
                    <div>
                        <FacebookIcons/>
                    </div>
                    <div>
                        <Telegram1Icons/>
                    </div>
                    <div>
                        <TwiterIcons/>
                    </div>
                </div>
            </Container>

            <Container>
                <div className={cls.SingleBlogsPage__back} onClick={()=>router.back()} >
                     <BackIcons/>
                     <p>Back</p>
                </div>

                <div className={cls.SingleBlogsPage__content}>
                    <h3 className={cls.SingleBlogsPage__content__title}>A Deep Dive Into AWS Certifications and the Solutions Architect Exam</h3>
                    <div className={cls.SingleBlogsPage__content__top}>
                        <div className={cls.SingleBlogsPage__content__person}>
                            <Image width={40}
                                height={40}
                                src={'/Home/careerconsultation-bg.png'} alt="img" /> 
                            <div>
                                <h4>Arlene McCoy</h4>
                                <p > Frontend developer @Uzummarket</p>
                            </div>
                        </div>
                        <div className={cls.SingleBlogsPage__content__date}>
                            <h3>Published</h3>
                            <p>December 5, 2023</p>
                        </div>
                    </div>
                    <Image
                        className={cls.SingleBlogsPage__content__image}
                        src={'/Home/careerconsultation-bg.png'} 
                        width={744}
                        height={436}
                        alt={"img"}
                    />
                    
                    <p className={cls.SingleBlogsPage__content__text}>The public cloud market is growing at a staggering rate, as companies of all sizes move their technical architecture away from costly on-site configurations. At the top of this industry is Amazon’s public cloud service, AWS, with $35.4 billion in revenue last year and 38.9% total market share. Its closest competitor, Microsoft’s Azure, saw $19 billion in revenue and 21.1% market share. It’s understandable then that AWS skills are in high demand among companies wanting to scale their backend infrastructure and provide the best possible customer experience.</p>
                </div>

             
            </Container>
                <h3 className={cls.SingleBlogsPage__keep}>Keep reading</h3>
            <Container className={cls.SingleBlogsPage__flex} >
                <SwiperWithScrollIcons slidesPerView={3}>
                    
                 <BlogsCard
                    id={22}
                    img={'/Home/learninmonths-hover.png'}
                    title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                    date={"7 / 11 / 2023"}
                    
                    />
            </SwiperWithScrollIcons>
            </Container>
        </div>
    )
}
