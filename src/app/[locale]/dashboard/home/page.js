import DashboardHomePage from "@/components/page/dashboard/home";
import axios_init from "@/utils/axios_init";
import { cookies } from "next/headers";

async function getData() {
  // const res = await axios_init.get('/course/main-course/')
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/course/main-course/`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}

export default async function page() {
  const data = await getData()
    return (
      <>
        <DashboardHomePage data={data}/>
      </>
    )
  }