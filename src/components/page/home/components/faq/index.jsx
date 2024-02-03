'use client'
import BlueBtn from '@/components/UI/button/blue-btn'
import {Collapse} from 'react-collapse';
import { PlusIcons } from '@/components/UI/icon'
import { useState } from 'react'
import cls from './faq.module.scss'


const faqArr = [
    {
        id: 1,
        title: "What requirements need to be met?",
        text: "For those who doubt, we have designed a free part that will help you get an answer to this question. If you are convinced that the chosen profession does not suit you - this is also a positive result."
    },
    {
        id: 2,
        title: "What requirements need to be met?",
        text: "For those who doubt, we have designed a free part that will help you get an answer to this question. If you are convinced that the chosen profession does not suit you - this is also a positive result."
    },
    {
        id: 3,
        title: "What requirements need to be met?",
        text: "For those who doubt, we have designed a free part that will help you get an answer to this question. If you are convinced that the chosen profession does not suit you - this is also a positive result."
    },
    {
        id: 4,
        title: "What requirements need to be met?",
        text: "For those who doubt, we have designed a free part that will help you get an answer to this question. If you are convinced that the chosen profession does not suit you - this is also a positive result."
    }
]
export default function Faq() {
    const [faqId, setfaqId] = useState(false)
    return (
        <div className={cls.Faq} id='faq'>
            <div className={cls.Faq__left}>
                <div className={cls.Faq__left__dote}>
                    <div></div>
                    <p>FAQ</p>
                </div>
                <h3 className={cls.Faq__left__title}>{`Answering the questions`}</h3>
                <p className={cls.Faq__left__text}>Put together a program based on the 4C/ID educational model: you will only learn what you need to learn to solve specific practical frontend tasks</p>
                <BlueBtn className={cls.Faq__btn}>Write us</BlueBtn>
            </div>

            {faqArr && <ul className={cls.Faq__list}>
                {faqArr?.map(e => (
                    <li className={`${cls.Faq__item} ${faqId == e?.id ? cls.Faq__itemActive : ""}`} key={e?.id} onClick={() => setfaqId(state => state == e?.id ? false : e?.id)}>
                        <div><h4>{e?.title}</h4> <PlusIcons /> </div>
                        <Collapse isOpened={faqId}>
                            {faqId == e?.id ? <p> {e?.text}</p> : ""}
                        </Collapse>

                    </li>
                ))}
            </ul>}
        </div>
    )
}
