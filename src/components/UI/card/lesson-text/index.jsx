import cls from './lestext.module.scss'

export default function LessonTextCard({title,text,level,levelColor,border,required,...other}) {
  return (
    <div className={`${cls.LessonTextCard} ${border && cls.LessonTextCard__border}`}>
          <div className={cls.LessonTextCard__top}>
              <div>
                  <h3 className={cls.LessonTextCard__title}>{title}</h3>
                  {
                    required && <span>*</span>
                  }
              </div>
              {level && <button className={cls.LessonTextCard__top__btn}>{level}</button>}
          </div> 
          <p className={cls.LessonTextCard__text}>{text}</p>
    </div>
  )
}
