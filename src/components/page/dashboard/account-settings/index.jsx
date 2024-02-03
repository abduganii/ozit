'use client'
import AddBtn from '@/components/UI/button/add-btn'
import GlobalInput from '@/components/UI/form/global-input'
import { DonePasswordIcons } from '@/components/UI/icon'
import GlobalMadal from '@/components/UI/madal/global-madal'
import cls from "./editProfile.module.scss"

export default function AccountSet({ close ,openPassword,openDelete}) {
  return (
    <GlobalMadal close={close} title={"Account settings"}>
          <GlobalInput type={"email"} label={"Email"} placeholder={"Email"} style={{ marginBottom: "32px" }} />
          <GlobalInput type={"tel"} label={"Phone number"} placeholder={"Phone number"} style={{marginBottom:"32px"}} />

          <div className={cls.AccountSet__passwrod}>
              <p className={cls.AccountSet__passwrod__text}>Password</p>
              <div className={cls.AccountSet__passwrod__wrap}>
                  <DonePasswordIcons />
                  <p>Updated 2 weeks ago</p>
                  <span onClick={(e) => {
                      close(e)
                      openPassword(e)
                  }}>Change password</span>
              </div>
              <p className={cls.AccountSet__passwrod__delete}
                  onClick={(e) => {
                      close(e)
                      openDelete(e)
                  }}>Delete account</p>
          </div>
          <AddBtn>Submit</AddBtn>
    </GlobalMadal>
  )
}
