import cls from './authInput.module.scss'
import ReactInputMask from "react-input-mask";
export default function AuthInputMask({label,type,mask,placeholder,className,...other}) {
  return (
    <label className={cls.AuthInput}>
          <p className={cls.AuthInput__label}>{label}</p>
        <ReactInputMask
          className={`${cls.AuthInput__input} ${className && className}`}
          placeholder={placeholder}
          mask={mask}
        
          {...other}
      />
    </label>
  )
}
