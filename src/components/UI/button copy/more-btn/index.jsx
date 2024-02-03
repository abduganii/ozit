import { DawnIcons } from '../../icon'
import cls from './moreBtn.module.scss'

export default function MoreBtn({ white, children, type = "button", className, ...other }) {
    return (
        <button className={`${cls.MoreBtn} ${className && className}`} type={type} {...other}>
            Show more
            <DawnIcons />
        </button>
    )
}
