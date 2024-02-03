'use client'
import cls from './global.module.scss'
import ReactInputMask from "react-input-mask";
import { EyeClose, EyeOpen } from '../../icon';


export default function GlobalInput({ label, type, eye, value, placeholder, ...other }) {
  

  return (
    <label className={cls.GlobalInput} {...other}>
      <p className={cls.GlobalInput__lebel}>{label}</p>
      {
        type == "tel" ?
          <ReactInputMask
                className={cls.GlobalInput__input}
                placeholder={placeholder}
                mask="+\9\9\8 (99) 999-99-99"
          />
        : <input  className={cls.GlobalInput__input} type={type} placeholder={placeholder} value={value} />
      }
      {
        eye? <div className={cls.GlobalInput__password} onClick={eye}>{type=="password"? <EyeClose/>:<EyeOpen/>}</div> :""
      }
      
    </label>
  )
}
