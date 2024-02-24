"use client"
import Container from "@/components/UI/container";
import AuthInput from "@/components/UI/form/auth-input";
import AuthInputMask from "@/components/UI/form/auth-input-mask";
import { InstaIcons, TelegramIcons, YoutobeIcons } from "@/components/UI/icon";
import cls from "./contactUs.module.scss"

export default function ContactUsPage() {
    return (
        <Container className={cls.ContactUsPage}>
            <h3>Contact us!</h3>   
            <div className={cls.ContactUsPage__wrap}>
            <form className={cls.ContactUsPage__form}>
                <AuthInput
                    type={"text"}
                    placeholder={"Your name"} 
                    className={cls.ContactUsPage__form__input}
                    />
                <AuthInputMask
                    placeholder={"Phone"}
                    mask="+\9\9\8 99 999-99-99"
                    className={cls.ContactUsPage__form__input1}
                    />
                <AuthInput type={"email"} placeholder={"Email"} 
                       className={cls.ContactUsPage__form__input}
                />
                <AuthInput
                    type={"textarea"} placeholder={"Your message"} 
                       className={cls.ContactUsPage__form__input}
                />
                <div >
                    <button >Contact us</button>
                    <p>By clicking the Contact us button you
                    agree to our <spn>Privacy Policy</spn> terms</p>
              </div>
            </form>
            <div className={cls.ContactUsPage__right}>
                <div className={cls.ContactUsPage__right__wrap}>
                    <span>Phone</span>
                    <p>+998 90 000 00 01</p>
                </div>
                <div className={cls.ContactUsPage__right__wrap}>
                    <span>Email</span>
                    <p>support@uzit.uz</p>
                </div>
                <div className={cls.ContactUsPage__right__wrap}>
                    <span>Address</span>
                    <p>Street Abu Suleyman Banokati, Mirabad Area, 100167</p>
                </div>
                <div className={cls.ContactUsPage__icons}>
                            <a href="/">
                                <TelegramIcons color={"#5B40FF"} />
                            </a>
                            <a href="/">
                                <YoutobeIcons color={"#5B40FF"} />
                            </a>
                            <a href="/">
                                <InstaIcons  color={"#5B40FF"}/>
                            </a>
                        </div>
            </div>
            </div>
        </Container>
    
  )
}
