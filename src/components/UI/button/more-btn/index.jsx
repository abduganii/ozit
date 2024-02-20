import { DawnIcons } from '../../icon'
import cls from './moreBtn.module.scss'

export default function MoreBtn({ white, children, type = "button",onClick, className, ...other }) {
    return (
        <button className={`${cls.MoreBtn} ${className && className}`} onClick={onClick} type={type} {...other}>
            Show more
            <DawnIcons />
        </button>
    )
}
