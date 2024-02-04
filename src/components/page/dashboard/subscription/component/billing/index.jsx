import cls from './billing.module.scss'

export default function Billing() {
  return (
    <div className={cls.Billing}>
      <h4 className={cls.Billing__title}>Billing</h4>
      <p className={cls.Billing__text}>Manage your billing information</p>
      <h4 className={cls.Billing__title2}>Current plan </h4>
      <p className={cls.Billing__text2}>You are currently on the <span>Pro plan (Monthly)</span>. Your subscription will renew on March 18, 2024.</p>

      <div className={cls.Billing__btn}>
    <button>Manage billing</button>
    <button>Cancel plan</button>
      </div>
    </div>
  )
}
