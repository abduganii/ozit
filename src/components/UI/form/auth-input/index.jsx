import cls from './authInput.module.scss'

export default function AuthInput({label,type,placeholder ,value,register}) {
  return (
    <label className={cls.AuthInput}>
          <p className={cls.AuthInput__label}>{label}</p>
      <input className={cls.AuthInput__input} type={type} value={value} placeholder={placeholder} {...register} />
    </label>
     
  )
}
