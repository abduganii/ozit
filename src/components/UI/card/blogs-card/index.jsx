'use client'
import { useRouter } from 'next/navigation'
import cls from './blogsCard.module.scss'

export default function BlogsCard({ img, title,id, date ,...other}) {
    const router = useRouter()
    let createAt = new Date(date);
    let Hours = createAt.getHours();
    let Minutes = createAt.getMinutes();

    const weeksDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  
    return (
        
        <div className={cls.BlogsCard} {...other} onClick={()=>router.push(`/home/blog/${id}`)}>
            <img src={img} alt="img" />
            <h4 className={cls.BlogsCard__title}>{title}</h4>
            <p className={cls.BlogsCard__date}>{date.slice(0, 10)}{weeksDay[createAt.getDay()]} {Hours}:{Minutes} </p>
        </div>
    )
}
