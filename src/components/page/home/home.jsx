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
import ReviewCard from "@/components/UI/card/review-card";
import HelpToJobCard from "@/components/UI/card/help-card";
import CursPriceCard from "@/components/UI/card/curs-price-card";
import BlogsCard from "@/components/UI/card/blogs-card";
import Faq from "./components/faq";

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
                                img={e?.image}
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
                        img={'/Home/process-card1-img.png'}
                        backImage={"/Home/process-card1-bg.png"}
                        title={"First, you learn  visual theory"}
                        text={"To help you memorize better, the material is given in the form of text with pictures and diagrams. If you need to repeat something, you can easily find the information you need by using the search function"}
                    />
                    <LoarnCard
                        img={'/Home/process-card2-img.png'}
                        backImage={"/Home/process-card2-bg.png"}
                        title={"First, you learn  visual theory"}
                        text={"To help you memorize better, the material is given in the form of text with pictures and diagrams. If you need to repeat something, you can easily find the information you need by using the search function"}
                    />
                </div>
                <DoProject />
                <ProgramSection />

                <h3 className={cls.HomePage__forwho}>Отзывы</h3>
                <div className={cls.HomePage__info}>
                    <ReviewCard
                        text={`Я работал в продажах, затем в такси
                    и не представлял, чем именно хочу
                    заниматься. Однажды случайно наткнулся на Практикум и прошёл курс. С тех пор уже вырос до middle фронтенд-разработчика в Loymax. Параллельно работаю в UzIT`}
                        name={"Arlene McCoy"}
                        position={"Frontend developer @Uzummarket"}
                    />
                    <ReviewCard
                        text={`Я работал в продажах, затем в такси
                    и не представлял, чем именно хочу
                    заниматься. Однажды случайно наткнулся на Практикум и прошёл курс. С тех пор уже вырос до middle фронтенд-разработчика в Loymax. Параллельно работаю в UzIT`}
                        name={"Arlene McCoy"}
                        position={"Frontend developer @Uzummarket"}
                    />
                </div>

                <h3 className={cls.HomePage__forwho}>We can help you find a job, even if you have no IT experience</h3>

                <div className={cls.HomePage__info}>
                    <HelpToJobCard
                        bgImage={"/Home/help-card1.png"}
                        title={"We'll tell you how to designyour portfolio"}
                        text={"To show how much you know and can do"}
                    />
                    <HelpToJobCard
                        bgImage={"/Home/help-card1.png"}
                        title={"We'll tell you how to designyour portfolio"}
                        text={"To show how much you know and can do"}
                    />
                      <HelpToJobCard
                        bgImage={"/Home/help-card3.png"}
                        
                        title={"We'll tell you how to designyour portfolio"}
                        text={"To show how much you know and can do"}
                    />
                    <HelpToJobCard
                        bgImage={"/Home/help-card4.png"}
                        title={"We'll tell you how to designyour portfolio"}
                        text={"To show how much you know and can do"}
                    />
                </div>

            </Container>
            <div className={cls.HomePage__reclama}>
                <Container>
                    <h3 className={cls.HomePage__reclama__title}>Try any format of the course for free - you can choose
                        a one-size-fits-all later</h3>
                    <div className={cls.HomePage__info}>

                        <CursPriceCard
                            lesson={"Frontend developer"}
                            price={"299 000 sum/m"}
                            text={"Fee is charged monthly"}
                            arr={[{ id: 1, title: "Take control of your learning journey" }, { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " }]}
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
            <Container>

                <h3 className={cls.HomePage__forwho}>Blogs</h3>
                <div className={cls.HomePage__info}>
                    <BlogsCard
                        id={22}
                        img={'/Home/learninmonths-hover.png'}
                        title={"A Deep Dive Into AWS Certifications and the Solutions Architect Exam"}
                        date={"7 / 11 / 2023"}
                    />
                </div>

          
             <Faq  />
         
            </Container>
        </main>
    )
}