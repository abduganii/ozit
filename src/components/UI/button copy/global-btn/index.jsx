import cls from './global.module.scss'

export default function GlobalBtn({ children, type = "button", className, ...other }) {
    return (
        <button type={type} className={`${cls.GlobalBtn} ${className && className}`} {...other}>
            {children}
        </button>
    )
}
