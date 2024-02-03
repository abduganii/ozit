import cls from './bluebtn.module.scss'

export default function AddBtn({  children,opcity, type = "button", className, ...other }) {
    return (
        <button type={type} className={`${cls.GlobalBtn} ${opcity ? cls.GlobalBtn__opcity : ""} ${className && className}`} {...other}>
            {children}
        </button>
    )
}
