'use client'
import cls from './blogsid.module.scss'
 
import {useRouter } from 'next/navigation'
import Container from '@/components/UI/container'
import { BackIcons, FacebookIcons, IconsIcons, Telegram1Icons, TwiterIcons } from '@/components/UI/icon'
import Image from 'next/image'
import BlogsCard from '@/components/UI/card/blogs-card'
import SwiperWithScrollIcons from '@/components/UI/Swiper'
export default function SingleBlogsPage({Blogs,SingleBlogs}) {   
    const router = useRouter()

    let createAt = new Date(SingleBlogs?.created_at);
    let Hours = createAt.getHours();
    let Minutes = createAt.getMinutes();
    const weeksDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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
                    <h3 className={cls.SingleBlogsPage__content__title}>{ SingleBlogs?.title}</h3>
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
                            <p>{weeksDay[createAt.getDay()]} {Hours}:{Minutes}</p>
                        </div>
                    </div>
                    <Image
                        className={cls.SingleBlogsPage__content__image}
                        src={'/Home/careerconsultation-bg.png'} 
                        width={744}
                        height={436}
                        alt={"img"}
                    />
                    
                    <p className={cls.SingleBlogsPage__content__text}  dangerouslySetInnerHTML={{ __html: SingleBlogs.content }} />
                  
                </div>

             
            </Container>
                <h3 className={cls.SingleBlogsPage__keep}>Keep reading</h3>
            <Container className={cls.SingleBlogsPage__flex} >
                <SwiperWithScrollIcons slidesPerView={3}>
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
            </SwiperWithScrollIcons>
            </Container>
        </div>
    )
}
