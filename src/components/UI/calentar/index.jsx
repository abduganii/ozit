import cls from "./calentar.module.scss"
import MyCalendar from "./my-calendat"

const dataArr = [
    {
        id: 1,
        title: "Select a date and time that best suits your convenience",
        img:"/Home/card4.png"
    },
    {
        id: 2,
        title: "Input details: name, email, and phone number",
        img:"/Home/card5.png"
    },
    {
        id: 3,
        title: "All set, we’ll contact you to answer all your questions!",
        img:"/Home/card6.png"
    }
]

export default function Calentar() {
  return (
      <div className={cls.Calentar}>
        <div className={cls.Calentar__left}>
        <div>
          {dataArr && dataArr?.map(e => (
            <div className={cls.Calentar__left__item} key={e?.id}>
              <img
                src={e?.img}
                alt={"img"}
                width={96}
                height={96}
              />
              <h4> {e?.title}</h4>
            </div>
          ))}
        </div>
        <div className={cls.Calentar__left__set}>
            <p>Cookie settings</p>
            <p>Report abuse</p>
        </div>
        </div>
          <div className={cls.Calentar__right}>
        <h3 className={cls.Calentar__right__title}>Select a Date & Time</h3>  
        <div className={cls.Calentar__right__wrap}>
          <div className={cls.Calentar__right__calentar}>
            <MyCalendar/>
          </div>
          <div className={cls.Calentar__right__day}>
            <h4 className={cls.Calentar__right__day__title}>Thursday, December 28</h4>
            <button className={cls.Calentar__right__day__btn}>8:00am</button>
            <button className={cls.Calentar__right__day__btn}>8:30am</button>
            <button className={cls.Calentar__right__day__btn}>9:00am</button>
            <button className={cls.Calentar__right__day__btn}>9:30am</button>
            <button className={cls.Calentar__right__day__btn}>10:00am</button>
            <button className={cls.Calentar__right__day__btn}>10:30am</button>
            <button className={cls.Calentar__right__day__btn}>11:00am</button>
          </div>
          </div>
        </div>
    </div>
  )
}
