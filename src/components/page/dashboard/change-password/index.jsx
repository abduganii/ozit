'use client'
import AddBtn from '@/components/UI/button/add-btn'
import GlobalInput from '@/components/UI/form/global-input'
import { DonePasswordIcons } from '@/components/UI/icon'
import GlobalMadal from '@/components/UI/madal/global-madal'
import {useState } from "react"

export default function ChangePassword({ close }) {
    const [ eye,setEye] = useState(false)
    const [ eye1,setEye1] = useState(false)
  return (
    <GlobalMadal close={close} title={"Change password"}>
          <GlobalInput eye={()=>setEye(!eye)} type={eye ? "text":  "password"} label={"Old password"} placeholder={"Old password"} style={{ marginBottom: "32px" }} />
          <GlobalInput eye={()=>setEye1(!eye1)} type={eye1 ? "text": "password"} label={"New password"} placeholder={"New password"} style={{marginBottom:"32px"}} />
          <AddBtn>Submit</AddBtn>
    </GlobalMadal>
  )
}
