import AuthLayout from "@/components/layout/auth-layout";
import { authOptions } from "@/utils/auth";
import axios_init from "@/utils/axios_init";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import NextTopLoader from 'nextjs-toploader';
 
async function getMe() {
    // const res = await axios_init.get('/accounts/me')
    const token = cookies().get("token")
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/accounts/me`,{
      credentials:"include",
      headers:{
        Authorization: 'Bearer ' + token.value,
      }
    })
  
  if (!res.ok) {
    console.log("erro")
    if (res.status == 401) {
      return res.status
    }
  }
    return res.json()
  }
export default async function layout({ children }) {

  const token = cookies().get("token")
  const user = await getMe()


    const session = await getServerSession(authOptions);
    return (
        <AuthLayout user={user} >
            <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
        {children}
    </AuthLayout>
    )
  }