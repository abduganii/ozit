import { DownIcons } from '../../icon'
import cls from './lesson.module.scss'
import { Checkbox } from 'antd';
export default function LessonCard({lasson,title,completed,ExercisesArr=[],...other}) {
  return (
    <div className={cls.LessonCard} {...other}>
          <p className={cls.LessonCard__text}> {lasson}</p>
          <h3 className={cls.LessonCard__title}>{title}</h3>
          <div className={cls.LessonCard__wrap}>
              <div className={cls.LessonCard__top}>
                  <div className={cls.LessonCard__top__wrap}>
                      <p>{completed}</p>
                      <h4>Exercises</h4>
                  </div>
                  <div className={cls.LessonCard__top__icons}>
                      <DownIcons/>
                  </div>
              </div>

              {ExercisesArr&& ExercisesArr?.map(e => (
                  <div key={e?.id} className={cls.LessonCard__list}>
                      <Checkbox value={e?.isChecked} >{e?.text}</Checkbox>
                    
                  </div>
              ))}
          </div>
    </div>
  )
}
