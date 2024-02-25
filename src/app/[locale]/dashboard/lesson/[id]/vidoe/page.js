import LassonPage from "@/components/page/dashboard/lsn-vidoe";
import { cookies } from "next/headers";

async function getData(id) {
  // const res = await axios_init.get(`/course/lesson/${id}/`)
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/course/lesson/${id}/`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}
export default async function page({ params: { id } }) {
  const data = await getData(id)
  
  return (
    <>
      <LassonPage data={ data} />
    </>
  )
}
