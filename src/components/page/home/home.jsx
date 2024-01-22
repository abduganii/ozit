import cls from "./home.module.scss"
import Hero from "./components/hero";
import InfoCard from "@/components/UI/card/info-card";
import { InfoCardArr, MounthArr, WhoForArr } from "../data";
import Container from "@/components/UI/container";
import ImproveCareer from "./components/improve";
import ForWhomCard from "@/components/UI/card/for-whom-card";
import MounthCard from "@/components/UI/card/mouth-card";
import Help from "./components/help";
import LoarnCard from "@/components/UI/card/learn-card";
import DoProject from "./components/do-project";
import ProgramSection from "./components/program";

export default async function HomePage({ lang }) {
    return (
        <main>
            <Hero />
            <Container >
                <div className={cls.HomePage__info}>
                    {
                        InfoCardArr?.map(e => (
                            <InfoCard
                                key={e?.id}
                                img={e?.img}
                                text={e?.text}
                            />
                        ))
                    }
                </div>
                <ImproveCareer />
                <h2 className={cls.HomePage__forwho}>Кому подойдёт курс</h2>
                <div className={cls.HomePage__info}>
                    {
                        WhoForArr?.map(e => (
                            <ForWhomCard
                                key={e?.id}
                                img={e?.img}
                                title={e?.title}
                                text={e?.text}
                            />
                        ))
                    }
                </div>
                <h2 className={cls.HomePage__forwho}>Чему вы научитесь за 6 месяцев</h2>
                <div className={cls.HomePage__info}>
                    {
                        MounthArr?.map((e, i) => (
                            <MounthCard
                                key={e?.id}
                                mounth={e?.mounth}
                                text={e?.text}
                                className={cls.HomePage__whocard}
                            />
                        ))
                    }
                </div>
                <Help />

                <h2 className={cls.HomePage__forwho}>Учёбе нужно уделять не меньше 20 часов в неделю.
                    Заниматься можно в любое время, главное — вовремя сдавать проекты на проверку.</h2>
                <div className={cls.HomePage__info}>
                    <LoarnCard
                        img={'/image/Frame2.png'}
                        title={"First, you learn  visual theory"}
                        text={"To help you memorize better, the material is given in the form of text with pictures and diagrams. If you need to repeat something, you can easily find the information you need by using the search function"}
                    />
                    <LoarnCard
                        img={'/image/Frame2.png'}
                        title={"First, you learn  visual theory"}
                        text={"To help you memorize better, the material is given in the form of text with pictures and diagrams. If you need to repeat something, you can easily find the information you need by using the search function"}
                    />
                </div>
                <DoProject />
                <ProgramSection />

                <h3 className={cls.HomePage__forwho}>Отзывы</h3>

            </Container>
        </main>
    )
}