'use client'

import { useRouter } from 'next/navigation'
import cls from './blogsCard.module.scss'

export default function BlogsCard({ img, title,id, date ,...other}) {
    const router = useRouter()
    return (
        <div className={cls.BlogsCard} {...other} onClick={()=>router.push(`/blog/${id}`)}>
            <img src={img} alt="img" />
            <h4 className={cls.BlogsCard__title}>{title}</h4>
            <p className={cls.BlogsCard__date}> {date}</p>
        </div>
    )
}
