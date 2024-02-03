import cls from './lestext.module.scss'

export default function LessonTextCard({title,text,level,levelColor,border,required,...other}) {
    const hexToRgb = (hex) => {
        hex = hex.replace(/^#/, '');
      
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
      
        return `${r}, ${g}, ${b}`;
      };
  return (
    <div className={`${cls.LessonTextCard} ${border && cls.LessonTextCard__border}`}>
          <div className={cls.LessonTextCard__top}>
              <div >
                  <h3 className={cls.LessonTextCard__title}>{title}</h3>
                  {
                    required && <span>*</span>
                  } 
              </div>
              {level && <button className={cls.LessonTextCard__top__btn} style={{color:levelColor,backgroundColor: `rgba(${hexToRgb(levelColor)}, ${.2})`}}>{level}</button>}
          </div> 
          <p className={cls.LessonTextCard__text}>{text}</p>
    </div>
  )
}
