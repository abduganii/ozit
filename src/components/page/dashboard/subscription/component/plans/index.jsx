import CursPriceCard from '@/components/UI/card/curs-price-card'
import cls from './plans.module.scss'

export default function Plans() {
  return (
    <div className={cls.Plans}>
          <CursPriceCard
                btnColor={true}
              background={"#F9F9FB"}
        lesson={"Frontend developer"}
        price={"299 000 sum/m"}
        text={"Fee is charged monthly"}
        arr={[{ id: 1, title: "Take control of your learning journey" }, { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," }]}
    />
          <CursPriceCard
            
                background={`rgba(253, 157, 255, 0.1)`}
        lesson={"Frontend developer"}
        price={"299 000 sum/m"}
        text={"Fee is charged monthly"}
        arr={[{ id: 1, title: "Take control of your learning journey" }, { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " }]}
    />
    </div>
  )
}
