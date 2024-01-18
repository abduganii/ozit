import cls from './bluebtn.module.scss'

export default function BlueBtn({ white, children, type = "button", className, ...other }) {
    return (
        <button type={type} className={`${cls.GlobalBtn} ${white ? cls.GlobalBtn__white : ""} ${className && className}`} {...other}>
            {children}
        </button>
    )
}
