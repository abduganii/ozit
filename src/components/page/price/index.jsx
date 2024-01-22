import CursPriceCard from '@/components/UI/card/curs-price-card'
import Container from '@/components/UI/container'
import cls from './price.module.scss'

export default function PricePage() {
    return (
        <div className={cls.PricePage}>
            <Container>
                <h3 className={cls.PricePage__title}>Try any format of the course for free - you can choose
                    a one-size-fits-all later</h3>

                <div className={cls.PricePage__flex}>
                    <CursPriceCard
                        lesson={"Frontend developer"}
                        price={"299 000 sum/m"}
                        text={"Fee is charged monthly"}
                        arr={[{ id: 1, title: "Take control of your learning journey" }, { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," }]}
                    />
                    <CursPriceCard
                        lesson={"Frontend developer"}
                        price={"299 000 sum/m"}
                        text={"Fee is charged monthly"}
                        arr={[{ id: 1, title: "Take control of your learning journey" }, { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " }]}
                    />
                </div>
            </Container>
        </div>
    )
}
