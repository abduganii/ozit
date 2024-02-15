"use client"
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import axios_init from "@/utils/axios_init"
import Loader from "@/components/UI/loader"

export default function GooglePage({ session }) {
    const router = useRouter()
    useEffect(() => {
        const token = Cookies.get('token')
      const logIn = async () => {
       await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
         body: JSON.stringify({
          user_token: session['id_token'],
          }),
        });
          // const login = await axios_init.post('/accounts/google/', {
          //     user_token: session['id_token'],
          // })
          
      
          // if (login?.status == "active") {
            Cookies.set('token', login.tokens.access)
            router.push('/dashboard/home')
          // } else if (login?.status == "created") {
          //   Cookies.set('token', login.tokens.access)
          //   router.push('/auth/login?opnemadal=1')
          // }
        }
        if (!token &&session && session['id_token']) {
            logIn()
        }
    }, [])
  return (
    <>
      
      <Loader/>
    </>
  )
}
