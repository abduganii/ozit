import { PlayVidoeIcons } from '@/components/UI/icon'
import cls from './vidoecard.module.scss'

export default function VidoeHomeCard() {
  return (
    <div className={cls.VidoeHomeCard}>
          <div className={cls.VidoeHomeCard__card}><PlayVidoeIcons /></div>
          <div className={cls.VidoeHomeCard__Contect}>
              <p>Lesson 1</p>
              <h4>HTML, CSS, JavaScript: free module</h4>
          </div>
    </div>
  )
}
