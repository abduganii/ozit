import cls from './authInput.module.scss'

export default function AuthInput({label,type,placeholder ,className,value,register,...other}) {
  return (
    <label className={`${cls.AuthInput} ${className && className}`} {...other}>
      <p className={cls.AuthInput__label}>{label}</p>
      {
        type == "textarea" ? <textarea cols={4} rows={5} className={cls.AuthInput__input} type={type} value={value} placeholder={placeholder} {...register} >

        </textarea>: <input className={cls.AuthInput__input} type={type} value={value} placeholder={placeholder} {...register} />
      }
     
    </label>
     
  )
}
