import Image from 'next/image'
import cls from './upload.module.scss'

export default function UploadInput({image,onChange,onDelete,...other}) {
  return (
    <div className={cls.UploadInput} {...other}>
          <Image
              className={cls.UploadInput__image}
              src={image ? image : "/Home/ava.svg"}
              width={128}
              height={128}
              alt={"img"}
          /> 

          <div className={cls.UploadInput__btn}>
            <label>
                <input type={"file"} accept="image/jpeg, image/png" onChange={onChange} /> 
                {image ? "Replace" :"Add photo"}
              </label>
             {image?<p onClick={onDelete}>Delete</p>:""}
          </div>
    </div>
  )
}
