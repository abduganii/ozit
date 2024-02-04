'use client'
import GlobalMadal from '@/components/UI/madal/global-madal'
import { useState } from 'react'
import Billing from './component/billing'
import Plans from './component/plans'
import cls from './editProfile.module.scss'

const NavbarArr= [
    {
        id: 1,
        title: "Plans",
        component:<Plans/>
    },
    {
        id: 2,
        title: "Billing",
        component:<Billing/>
    }
]
export default function Subscription({ close }) {
    const [currentPage, setCurrentPage] = useState(1)
    const currentPageCom = NavbarArr.find(e => e?.id == currentPage )
  
  return (
    <GlobalMadal className={cls.EdetProfile__wrap} close={close} title={"Manage subscription"}>
      <div className={cls.EdetProfile}>
            <div className={cls.EdetProfile__nabvar}>
                  {NavbarArr?.map(e => (
                      <p className={`${currentPage == e?.id ? cls.EdetProfile__nabvar__active:""}`} key={e?.id} onClick={()=>setCurrentPage(e?.id)}>{ e?.title}</p>
                ))}
            </div>
            {currentPageCom?.component }

      </div>
    </GlobalMadal>
  )
}
