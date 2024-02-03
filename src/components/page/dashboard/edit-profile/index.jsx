'use client'
import AddBtn from '@/components/UI/button/add-btn'
import BlueBtn from '@/components/UI/button/blue-btn'
import GlobalBtn from '@/components/UI/button/global-btn'
import GlobalInput from '@/components/UI/form/global-input'
import UploadInput from '@/components/UI/form/upload-input'
import { DeleteIcons } from '@/components/UI/icon'
import GlobalMadal from '@/components/UI/madal/global-madal'
import { useState } from 'react'
import cls from './editProfile.module.scss'

export default function EdetProfile({ close }) {
  const [avatar,setAvatar] = useState(null)
  const hendleimg = async (e) => {
    if (e.target.files[0]) {
        setAvatar(URL.createObjectURL(e.target.files[0]))
    }
}
  return (
    <GlobalMadal close={close} title={"Edit Profile"}>
      <div className={cls.EdetProfile}>

        <UploadInput
          image={avatar}
          onChange={(e) => hendleimg(e)}
          onDelete={() => setAvatar(null)}
        />  
        <div className={cls.EdetProfile__left}>
          <GlobalInput type={"text"} label={"Full name"} placeholder={"name"} style={{marginBottom:"32px"}} />
          <GlobalInput type={"email"} label={"Email"} placeholder={"Email"} style={{ marginBottom: "32px" }} />
          <AddBtn>Save changes</AddBtn>
        </div>
      </div>
    </GlobalMadal>
  )
}
