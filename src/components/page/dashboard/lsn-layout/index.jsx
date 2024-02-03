'use client'
import DashboardHeader from '@/components/UI/dashboard-header'
import { useParams } from 'next/navigation'
import cls from './lesson.module.scss'

export default function LassonLoayout({ children }) {
  const {id} = useParams()
    
  return (
    <div className={cls.LassonLoayout}>
      <div className={cls.LassonLoayout__content}>
      <DashboardHeader sprintId={id} currentLesson={"Sprint 1 · Lesson 1"}/>
      {children}
      </div>
      <div className={cls.LassonLoayout__right}>
        code etidor
      </div>
    </div>
  )
}
