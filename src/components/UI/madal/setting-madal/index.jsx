import cls from './settingMadal.module.scss'
import { AccountIcons, EtidIcons } from '../../icon'

export default function SettingMadal({name,email,accountOpen,editprofile,logout}) {
  return (
    <div className={cls.SettingMadal}>
        <h3 className={cls.SettingMadal__name}>{name}</h3>
          <p className={cls.SettingMadal__email}>{email}</p>  
          <div className={cls.SettingMadal__list} onClick={accountOpen}>
              <AccountIcons />
              <p>Account settings</p>
          </div>
          <div className={cls.SettingMadal__list}>
              <AccountIcons />
              <p>Manage subscription</p>
          </div>
          <div className={cls.SettingMadal__list} onClick={logout}><p>Log out</p></div>

          <div className={cls.SettingMadal__btn} onClick={editprofile}><EtidIcons/> Edit profile</div>
    </div>
  )
}
