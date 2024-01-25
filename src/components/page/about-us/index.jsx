import InfoCard from '@/components/UI/card/info-card';
import TeamCard from '@/components/UI/card/team-card';
import Container from '@/components/UI/container';
import { PlayIcons } from '@/components/UI/icon';
import Image from 'next/image';
import { InfoCardArr} from "../data";
import Help from '../home/components/help';
import cls from './aboutUs.module.scss';
// Cosmic.jpg
export default function AboutUsPage() {
  return (
    <div className={cls.AboutUsPage}>
        <div className={cls.AboutUsPage__hero}>
            <Container className={cls.AboutUsPage__hero__div}>
              <h3 className={cls.AboutUsPage__hero__title}>About us</h3>  
             <div className={cls.AboutUsPage__hero__play}><PlayIcons/> <p>Watch the film</p> </div>
           </Container>  
          </div>
          <div className={cls.AboutUsPage__content}>
            <h3>We empower individuals worldwide to unlock their full potential</h3>
            <p>World-class, innovative, efficient, and accessible learning solutions</p>
          </div>

          <div className={cls.AboutUsPage__vidoe}>
              {/* <Container>
              <div className={cls.AboutUsPage__vidoe__left}>
                  <h4> We create the best end-to-end learning platform for newbies to crack interviews and land their first tech jobs</h4> 
                  <div>
                      <Image
                          src={'/img'}
                          width={40}
                          height={40}
                          alt={"img"}
                      />
                      <p className={cls.AboutUsPage__vidoe__text}>Ehsan, Co founder</p>
                  </div>
                 
              </div>
              <div  className={cls.AboutUsPage__vidoe__right}>
                <PlayIcons />
                <p className={cls.AboutUsPage__vidoe__play}>Watch the film</p>
                </div>
              </Container> */}
          </div>


          <Container>
          <h3 className={cls.AboutUsPage__title}>Meet the team</h3>
          <div className={cls.AboutUsPage__flex}>
              <TeamCard name={"Alexandra Santos"} position={ "Ceo"} />
              <TeamCard name={"Alexandra Santos"} position={ "Ceo"} />
              <TeamCard name={"Alexandra Santos"} position={ "Ceo"} />
              </div>
            <h3 className={cls.AboutUsPage__title}>Our mission</h3>
              <div className={cls.AboutUsPage__flex}>
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

              <div className={cls.AboutUsPage__help}>
              <Help/>
            </div>
       </Container>
    </div>
  )
}
